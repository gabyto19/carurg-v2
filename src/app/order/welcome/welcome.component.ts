import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  
  constructor(private sharedService: SharedService) { }

  sendOrderType(data:any) {
    const orderType = data;
    this.sharedService.setOrderType(orderType);
  }

}
