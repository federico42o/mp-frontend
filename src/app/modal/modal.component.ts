import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { PreferenceService } from '../services/preference.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private service: PreferenceService) { }

  sandBoxLink: string = "";

  isVisible: boolean = false;

  closeModal() : void {
    this.isVisible = false;
  }

  @Output() open = new EventEmitter();


  // ngOnInit(): void {
  //   this.service.generatePreference().subscribe(response => {
  //     if(response) {
  //     this.sandBoxLink = response.sandboxInitPoint
  //     this.isVisible = true;
  //   }
  //     })
  // }
  
}
