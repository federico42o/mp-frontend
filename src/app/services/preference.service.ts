import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {env} from 'src/environments/environment'
import { Payer } from '../models/payer';
import { Preference } from '../models/preference';
import { Product, products } from '../models/product';
import { PaymentMethods } from '../models/payment-methods';
import { BackUrls } from '../models/back-urls';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  
  backendUrl = env.BACKEND_URL;

  constructor(private http: HttpClient) { }
  
  generatePreference(): Observable<any> {
    
    
    let payer: Payer = {
      name: 'Lalo',
      lastName: 'Landa',
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


    let backUrls: BackUrls = {
      success: env.BACK_URLS[0],
      pending: env.BACK_URLS[1],
      failure: env.BACK_URLS[2]
    }

    
    let preference: Preference = {
      items: products,
      payer: payer,
      backUrls: backUrls,
      paymentMethods: paymentMethods,
      autoReturn: 'approved',
      notificationUrl: env.NOTIFICATION_URL,
      externalReference: 'fedes7777@gmail.com',
    }
    

    let options : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-integrator-id': 'dev_24c65fb163bf11ea96500242ac130004'
    })

    


    return this.http.post(this.backendUrl, preference, {headers: options})
  }




}