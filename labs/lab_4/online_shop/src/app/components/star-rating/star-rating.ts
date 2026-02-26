import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  @Input() product!: Product;
  @Input() readonly!: boolean;

  disabled = this.readonly || false;
  hoveredRating: number = -1;

  onStarHover = (value: number) => {
    this.hoveredRating = value;
    console.log(this.hoveredRating);
  };

  onStarLeave = () => {
    this.hoveredRating = this.product.rating;
  };

  onStarClick = (rating: number) => {
    if (this.disabled) {
      if (this.readonly == true) {
        alert('Cannot rate');
        return;
      } else {
        alert('Already rated');
        return;
      }
    }
    this.product.rating = (this.product.rating + rating) / 2;
    this.disabled = true;
  };
}
