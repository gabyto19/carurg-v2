import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private orderType = new BehaviorSubject<any>(null);
  orderType$ = this.orderType.asObservable();

  setOrderType(data: any) {
    this.orderType.next(data);
  }
}
