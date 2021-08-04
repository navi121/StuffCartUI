import { Component, OnInit } from '@angular/core';
import { AddItem, CartItem } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  title = 'angularbootstrap';
  inputnumber = 0;
  qprice=1;
  items = this.userService.getItems();
  clear = this.userService.clearCart();
  constructor(public userService: UserService) { }
  
  
 
  ngOnInit(): void {
    //this.userService.getcartdetails();
  }
  plus()
  {
   this.inputnumber = this.inputnumber+1;
   this.qprice=1;
    this.qprice= this.inputnumber*this.qprice;
  }
  minus()
  {
    if(this.inputnumber != 0)
  {
   this.inputnumber = this.inputnumber-1;
   this.qprice=1;
   this.qprice= this.inputnumber*this.qprice;
  }
}
}
