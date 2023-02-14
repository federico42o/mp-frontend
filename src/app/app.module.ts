import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModalComponent } from './modal/modal.component';
import { StatusViewComponent } from './status-view/status-view.component';
import { SafePipeModule } from 'safe-pipe';
import { HomeComponent } from './home/home.component';
import { MercadoPagoResponse } from 'mercadopago/utils/mercadopago-respose';



@NgModule({

  declarations: [
    AppComponent,
    CheckoutComponent,
    ModalComponent,
    StatusViewComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
