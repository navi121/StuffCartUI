
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddItem, User, UserLog ,CartItem, Reset, Pass} from './user.model';
import { Router } from '@angular/router';
@Injectable()

export class UserService {
  list: AddItem[];
  items: CartItem[]=[];
  private sum=0;
  //private value: v[];
  readonly rootUrl = 'http://localhost:50278';
  constructor(private http: HttpClient,
    private _router:Router) { }
 
    public loginUser(login : UserLog): Observable<any>{
    const body: UserLog = {
      Password: login.Password,
      Email: login.Email,
    }
    return this.http.post(this.rootUrl + '/Login', body);
  }
  // loggedIn(){
  //   return !!localStorage.getItem('token')
  // }
  // logoutUser(){
  //   localStorage.removeItem('token')
  //   this._router.navigate(['home'])
  // }
  public resetUser(reset: Reset): Observable<any>{
    const body: Reset = {
      Email: reset.Email
    }
    return this.http.post(this.rootUrl + '/Forget',body);
  }
  public resetPassword(pass: Pass){
    const body: Pass= {
      Password: pass.Password,
      MobileNumber: pass.MobileNumber
    }
    return this.http.put(this.rootUrl + '/ResetPassword/'+ pass.MobileNumber, body);
  }
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
      image:additem.image,
      quantity:additem.quantity,
      total: additem.total
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
      const body: CartItem={
      productName: product.productName,
      productDescription: product.productDescription,
      price: product.price,
      size: product.size,
      quantity: product.quantity,
      total: product.total
      }
      this.items.push(product);
      return this.http.post(this.rootUrl + '/CartDetails' , body);
  }

  c(product: CartItem){
    // const body: CartItem={
    //   productName: product.productName,
    //   productDescription: product.productDescription,
    //   price: product.price,
    //   size: product.size
    //   }
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
  // add(items: CartItem){  
  //   this.value=items  
  //   for(let j=0;j<items.length;j++){  
  //        this.sum+= this.value[j].price  
  //        }  
  // }
  

}