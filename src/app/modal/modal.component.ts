import { Component, EventEmitter, Injectable, Input, OnInit , Output} from '@angular/core';
import { PreferenceService } from '../services/preference.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ModalComponent {

  @Input() checkoutUrl: string;
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
  
}
