import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../card/card';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description:
        'The ultimate iPhone. Forged in titanium. A17 Pro chip. The longest optical zoom in iPhone history.',
      price: 650000,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h25/84378448265246.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-titan-113138420/',
    },
    {
      id: 3,
      name: 'Fujifilm X-T5 Kit F 16-80mm F4 R OIS WR Silver',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 720000,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h31/80828483567646.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h31/80828483567646.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/fujifilm-x-t5-kit-xf-16-80mm-f4-r-ois-wr-silver-110418267/?c=750000000',
    },
    {
      id: 4,
      name: 'Canon PowerShot G7X Mark II',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 599900,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000',
    },
    {
      id: 5,
      name: 'Panasonic Lumix DC-S5 IIX Body',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 1148301,
      rating: 5.0,
      image: 'https://kaspi.kz/shop/p/panasonic-lumix-dc-s5-iix-body-129616935/?c=750000000',
      images: ['https://kaspi.kz/shop/p/panasonic-lumix-dc-s5-iix-body-129616935/?c=750000000'],
      link: 'https://kaspi.kz/shop/p/panasonic-lumix-dc-s5-iix-body-129616935/?c=750000000',
    },
    {
      id: 6,
      name: 'Panasonic Lumix DC-S5 II Body',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 1249985,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p86/32893174.JPG?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p2d/p86/32893174.JPG?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/panasonic-lumix-dc-s5-ii-body-137098071/?c=750000000',
    },
    {
      id: 7,
      name: 'Sony A6400 Kit 16-50mm f/3.5-5.6 II',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 500242,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/pf8/66233637.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p83/pf8/66233637.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-a6400-kit-16-50mm-f-3-5-5-6-ii-146072321/?c=750000000',
    },
    {
      id: 8,
      name: 'Sony ZV-E10 II Kit 16-50mm',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 583312,
      rating: 5.0,
      image: 'https://kaspi.kz/shop/p/sony-zv-e10-ii-kit-16-50-mm-121871825/?c=750000000',
      images: ['https://kaspi.kz/shop/p/sony-zv-e10-ii-kit-16-50-mm-121871825/?c=750000000'],
      link: 'https://kaspi.kz/shop/p/sony-zv-e10-ii-kit-16-50-mm-121871825/?c=750000000',
    },
    {
      id: 9,
      name: 'Fujifilm XE-2 Kit F 16-80mm F4 R OIS WR Silver',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 540000,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h31/80828483567646.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h31/80828483567646.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/fujifilm-x-t5-kit-xf-16-80mm-f4-r-ois-wr-silver-110418267/?c=750000000',
    },
    {
      id: 10,
      name: 'Canon PowerShot G7X Mark I',
      description:
        'Для любителей творчества, которые хотят запечатлеть каждый момент с максимальным качеством. Она станет отличным помощником как в путешествиях, так и в повседневной жизни.Рекомендуем использовать с дополнительными объективами для расширения возможностей съемки и создания уникальных кадров.',
      price: 599900,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000',
    },
  ];
}
