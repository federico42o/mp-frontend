import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Payer } from '../models/payer';
import { Preference } from '../models/preference';
import { Product, products } from '../models/product';
import { PaymentMethods } from '../models/payment-methods';
import { BackUrls } from '../models/back-urls';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  
  constructor(private http: HttpClient) { }
  
  generatePreference(): Observable<any> {
    
    
    let payer: Payer = {
      name: 'Lalo',
      surname: 'Landa',
      email: 'test_user_36961754@testuser.com',
      phone: {
        number: '54128866',
        areaCode: '11'
      },
      address: {
        streetName: 'Calle Falsa',
        streetNumber: 123,
        zipCode: '9420'
      }
    }
    let paymentMethods: PaymentMethods = {
      excludedPaymentMethods: ['visa'],
      installments: 6

    }

    console.log(paymentMethods.excludedPaymentMethods)

    let backUrls: BackUrls = {
      success: 'http://localhost:4200/success',
      pending: 'http://localhost:4200/pending',
      failure: 'http://localhost:4200/failure'
    }

    console.log(backUrls.success)
    
    let preference: Preference = {
      items: products,
      payer: payer,
      backUrls: backUrls,
      paymentMethods: paymentMethods,
      autoReturn: 'approved',
      // notificationUrl: 'http://localhost:8080/test/v1/notification',
      notificationUrl: 'https://9a2f-181-95-181-190.sa.ngrok.io/test/v1/notification',
      externalReference: 'fedes7777@gmail.com',
    }
    

    
    let preferenceJson = JSON.stringify(preference);
    console.log(preferenceJson)



    return this.http.post('http://localhost:8080/test/v1/create', preference, {headers: new HttpHeaders({
      'Content-Type': 'application/json'})})
  }




}