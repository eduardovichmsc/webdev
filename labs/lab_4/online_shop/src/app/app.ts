import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { PRODUCTS, CATEGORIES } from './db';
import { ProductListComponent } from './components/product/list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategory: Category | null = this.categories[0];
  visibleProducts: Product[] = [];

  constructor() {
    this.selectCategory(this.categories[0]);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.visibleProducts = this.allProducts.filter((p) => p.categoryId === category.id);
  }
}
