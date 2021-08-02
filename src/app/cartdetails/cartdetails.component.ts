import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  items = this.userService.getItems();
  clear = this.userService.clearCart();
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    //this.userService.getcartdetails();
  }

}
