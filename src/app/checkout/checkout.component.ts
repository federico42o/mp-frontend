import { Component,OnInit } from '@angular/core';
import { Product } from '../models/product';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


product: Product = 
    {
        id: 1111,
        title: 'iPhone 14 Pro',
        description: 'Dispositivo móvil de Tienda e-commerce',
        imageUrl: 'https://www.apple.com/v/iphone/home/bl/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
        quantity: 1,
        price: 1000
    }

  addToCart(product: Product) {
    console.log('Product', product);
    window.alert(`${product.title} has been added to the cart!`)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
