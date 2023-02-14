import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { products } from '../models/product';
import { PreferenceService } from '../services/preference.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],

})
export class CheckoutComponent implements OnInit, OnDestroy {
  
  constructor(private service: PreferenceService, private modal: ModalComponent) { }
  subscription: Subscription | undefined;
  modalVisible = false;
  products = products;
  checkoutUrl: string;
  prefId: string;
  view : string;
  
  
  ngOnInit(): void {
    this.view = 'checkout'; 
    const scriptEl = document.querySelector('script[view="home"]');
    if (scriptEl) {
      scriptEl.setAttribute('view', this.view);
    }
   }




  handleIncrement() {
    this.products[0].quantity++;
  }
  handleDecrement() {
    if (this.products[0].quantity > 1) {
      this.products[0].quantity--;
    }
  }

  generatePreference() {

    this.subscription = this.service.generatePreference().subscribe(
      response => {
        this.checkoutUrl = response.initPoint
        this.prefId = response.id;
        window.location.href = response.initPoint;
        // this.modalVisible = true;
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
  if(this.subscription) {
  this.subscription.unsubscribe();
}
    
  }



  

}




