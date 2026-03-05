import { Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { PostDetail } from './components/post-detail/post-detail';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
  },
  {
    path: 'posts',
    component: PostList,
  },
  {
    path: 'posts/:id',
    component: PostDetail,
  },
];
