import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
})
export class AlbumDetailComponent implements OnInit {
  currentAlbum: Album | undefined;
  editTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.albumsService.getAlbum(id).subscribe({
        next: (data) => {
          this.currentAlbum = data;
          this.editTitle = data.title;
        },
      });
    });
  }

  saveTitle(): void {
    if (this.currentAlbum) {
      const updatedAlbum: Album = {
        ...this.currentAlbum,
        title: this.editTitle,
      };

      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: (savedData) => {
          this.currentAlbum = savedData;
          alert('Album updated successfully!');
        },
        error: (err) => console.error('Error updating', err),
      });
    }
  }
}
