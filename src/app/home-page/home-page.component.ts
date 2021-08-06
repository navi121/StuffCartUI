import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { AddItem, CartItem } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  quantity : number=0;
  addToCart(product: CartItem){
    this.userService.addToCart(product);
    window.alert('product added');
    //this.quantity= this.quantity * Number(product.price);
  }

  constructor(public userService: UserService,public readonly router: Router) { }
  ngOnInit(): void {
    
    // this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userService.getdetails();
  }
  public async Click(button: NgForm): Promise<void> {
    this.userService.addToCart(button.value)
    .subscribe(()=>{
    });
  }
  
}
  // ngAfterViewInit(){
  //   this.getUsername();
  // }
  // getUsername(){
  //   this.userService.loginUser().then((username)=>{
  //       this.username=this.username;
  //       console.log("username is "+this.username);
  //   });
  // }


