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
  imageSrc : string;
  
  
  constructor(private titleService: Title, private route: ActivatedRoute) {
    this.titleService.setTitle('Tienda Azul');
  }
  
  

  
  ngOnInit(): void {

    const routeParam = this.route.snapshot.paramMap;
    this.status = routeParam.get('status');
    this.imageSrc = './assets/images/' + this.status + '.gif';
  }
  
  
}
  
