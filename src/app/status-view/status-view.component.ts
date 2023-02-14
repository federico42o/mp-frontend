import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.css'],
})
export class StatusViewComponent implements OnInit{

  status : string = "success";


  constructor(private titleService: Title, private route: ActivatedRoute) {
    this.titleService.setTitle('Tienda Azul - Pago Exitoso');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
