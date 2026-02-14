import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  selectImage(img: string) {
    this.currentImage = img;
  }

  share(platform: 'whatsapp' | 'telegram') {
    const productUrl = encodeURIComponent(this.product.link);
    const message = encodeURIComponent(`Check out this product: ${this.product.name}`);

    let url = '';

    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=Check out this product: ${productUrl}`;
    } else {
      url = `https://t.me/share/url?url=${productUrl}&text=${message}`;
    }

    window.open(url, '_blank');
  }
}
