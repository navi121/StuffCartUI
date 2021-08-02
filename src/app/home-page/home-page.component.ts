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
  
  addToCart(product: CartItem){
    this.userService.addToCart(product);
    window.alert('product added');
  }

  constructor(public userService: UserService,public readonly router: Router) { }
  ngOnInit(): void {
    
    // this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userService.getdetails();
  }
  public async OnSubmit(form: NgForm): Promise<void> {
    this.userService.registerUser(form.value)
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


