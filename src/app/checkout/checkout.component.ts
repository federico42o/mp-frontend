import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { Product, products } from '../models/product';
import { PreferenceService } from '../services/preference.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy{
  ngOnInit(): void { }

  constructor(private service : PreferenceService, private modal : ModalComponent) { }
  subscription: Subscription | undefined;
  modalVisible = false;
  products=products;
  checkoutUrl: string;

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
        this.checkoutUrl = response.sandboxInitPoint;
        console.log(this.checkoutUrl)
       // window.location.href = response.initPoint;
      }
    )

  }


  openCheckout() {
    this.modal.checkoutUrl = this.checkoutUrl;
    this.modal.open();
  }
  closeModal() {
    this.modalVisible = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    
  }





}
