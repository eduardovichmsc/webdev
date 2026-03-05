import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post';
import { Post, Comment } from '../../models/post.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.id = postId;
    console.log(postId);

    if (postId) {
      forkJoin({
        post: this.postService.getPost(postId),
        comments: this.postService.getComments(postId),
      }).subscribe((res) => {
        console.log(res);
        this.isLoading = false;
      });
    }
  }
  post: Post | null = null;
  comments: Comment[] = [];
  isLoading = true;
}
