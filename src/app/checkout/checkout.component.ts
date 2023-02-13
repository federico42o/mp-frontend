import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, products } from '../models/product';
import { PreferenceService } from '../services/preference.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  ngOnInit(): void { }

  constructor(private service : PreferenceService) { }
  subscription: Subscription | undefined;

  products=products;

  handleIncrement() {
    this.products[0].quantity++;
  }
  handleDecrement() {
    if (this.products[0].quantity > 1) {
      this.products[0].quantity--;
    }
  }

  generatePreference()  {

    this.subscription = this.service.generatePreference().subscribe(
      response => {
        console.log("-------------------------------------------")
        console.log(JSON.stringify(response))
       // window.location.href = response.initPoint;
      }
    )

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    
  }





}
