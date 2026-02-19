import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../card/card';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemoveProduct(productId: number) {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
