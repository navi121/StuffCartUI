import { Component, OnInit } from '@angular/core';
import { IndexedAccessType } from 'typescript';
import { AddItem, CartItem } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  Quantity = 1;
  qprice: number;

  items = this.userService.getItems();
  clear = this.userService.clearCart();
  constructor(public userService: UserService) { }
  
  
 
  ngOnInit(): void {
    
  }
  quantity:number=1;
  // add(getCart: CartItem){
  //   getCart.
  // }
  plus(getCart : CartItem)
  {
    var n=Number(getCart.quantity);
    n++;
    getCart.quantity=String(n);
    //his.Quantity=n;
    var finalp=Number(getCart.price);
    finalp=finalp*n;
    //getCart.price
    //getCart.price=String(finalp);
    getCart.total=String(finalp);
    // this.i++;
    // this.quantity=this.i;
     // this.Quantity = this.Quantity+1;
      //this.qprice = this.Quantity * i.;
  }
  minus(getCart : CartItem)
  {
    var n=Number(getCart.quantity);
    if(n!=0){
    n--;
    getCart.quantity=String(n);
    //this.Quantity=n;
    var finalp=Number(getCart.price);
    finalp=finalp*n;
    //getCart.price=String(finalp);
    getCart.total=String(finalp);
  //   if(this.Quantity != 0)
  // {
  //  this.Quantity = this.Quantity-1;
  //  this.qprice= this.Quantity * Number(getCart.price);
  // }
    }
}

}
