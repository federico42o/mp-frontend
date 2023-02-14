import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.css'],
})
export class StatusViewComponent implements OnInit{

  status : string | null;
  imageSrc : String;
  paymentId : number = 0;
  externalReference : string = '';
  preferenceId: string = '';
  merchantOrderId: string = '';
  view : string;

  constructor(private titleService: Title, private route: ActivatedRoute) {
    this.titleService.setTitle('Tienda Azul');
  }
  
  
  
  
  ngOnInit(): void {
    
    const routeParam = this.route.snapshot.paramMap;
    this.status = routeParam.get('status');
    this.view = 'checkout/'+this.status; 
    const scriptEl = document.querySelector('script[view="home"]');
    if (scriptEl) {
      scriptEl.setAttribute('view', this.view);
    }
    
    this.imageSrc = './assets/images/' + this.status + '.gif';

    

    this.params();

  }
  params() {
    this.route.queryParams.subscribe(params => {
    this.paymentId = params['payment_id'];
    this.externalReference = params['external_reference'];
    this.preferenceId = params['preference_id'];
    this.merchantOrderId = params['merchant_order_id'];

    });


  }


  
}
  
