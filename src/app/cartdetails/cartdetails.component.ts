import { Component, OnInit } from '@angular/core';
import { AddItem, CartItem } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  inputnumber = 1;
  qprice: number;
  items = this.userService.getItems();
  clear = this.userService.clearCart();
  constructor(public userService: UserService) { }
  
  
 
  ngOnInit(): void {
    
  }
  plus(getCart : CartItem)
  {
   this.inputnumber = this.inputnumber+1;
   this.qprice= this.inputnumber * Number(getCart.price);
   
  }
  minus(getCart : CartItem)
  {
    if(this.inputnumber != 0)
  {
   this.inputnumber = this.inputnumber-1;
   this.qprice= this.inputnumber * Number(getCart.price);
  }
}

}
