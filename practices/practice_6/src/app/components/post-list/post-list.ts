import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { Post } from '../../models/post.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res.slice(0, 20);
      console.log(this.posts);

      this.isLoading = false;
    });
  }
}
