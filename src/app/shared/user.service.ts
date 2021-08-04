
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddItem, User, UserLog ,CartItem} from './user.model';
import { Router } from '@angular/router';
@Injectable()

export class UserService {
  list: AddItem[];
  items: CartItem[]=[];

  readonly rootUrl = 'http://localhost:50277';
  constructor(private http: HttpClient,
    private _router:Router) { }
  public loginUser(login : UserLog): Observable<any>{
    const body: UserLog = {
      Password: login.Password,
      Email: login.Email,
    }
    return this.http.post(this.rootUrl + '/StuffKart/Login', body);
  }
  // loggedIn(){
  //   return !!localStorage.getItem('token')
  // }
  // logoutUser(){
  //   localStorage.removeItem('token')
  //   this._router.navigate(['home'])
  // }
  registerUser(user : User){
    const body: User = {
     MobileNumber:user.MobileNumber,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/StuffKart', body);
  }

  addproduct(additem:AddItem){
    const body: AddItem={
      productName: additem.productName,
      productDescription: additem.productDescription,
      price: additem.price,
      size: additem.size,
      image:additem.image
    }
    return this.http.post(this.rootUrl +'/AddProduct',body);
  }
  
  getdetails(){
    this.http.get(this.rootUrl +'/AddProduct').toPromise().then(res =>this.list=res as AddItem[]);
  }
  // getcartdetails(){
  //   this.http.get(this.rootUrl +'/CartDetails').toPromise().then(res =>this.items=res as CartItem[]);
  // }
  addToCart(product: CartItem){
    this.http.post(this.rootUrl +'/CartDetails',product);
    this.items.push(product);
    
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}