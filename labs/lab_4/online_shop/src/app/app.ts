import { Component } from '@angular/core';
import { ProductListComponent } from './components/product/list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `<app-product-list></app-product-list>`,
})
export class App {}
