import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  page: string = 'welcome'

  receivedOrderType: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.orderType$.subscribe(data => {
      this.receivedOrderType = data;
    });
  }
}
