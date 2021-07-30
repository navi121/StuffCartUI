
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddItem, User, UserLog } from './user.model';
import { Router } from '@angular/router';
@Injectable()

export class UserService {
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
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['home'])
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
      ProductName: additem.ProductName,
      ProductDescription: additem.ProductDescription,
      Price: additem.Price,
      Size: additem.Size,
      Image:additem.Image
    }
    return this.http.post(this.rootUrl +'/AddProduct',body);
  }

}