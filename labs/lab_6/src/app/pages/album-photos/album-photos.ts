import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = 0;
  photos: Photo[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.albumId = +params['id'];

      this.albumsService.getAlbumPhotos(this.albumId).subscribe({
        next: (data) => {
          this.photos = data;
          this.isLoading = false;
        },
      });
    });
  }
}
