import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  buttonToggler:string = 'welcome'
  constructor(private sharedService: SharedService) { }

  sendOrderType(data:any) {
    this.buttonToggler = data;
    const orderType = data;
    this.sharedService.setOrderType(orderType);
  }
}
