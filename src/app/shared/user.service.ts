import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddItem, User, UserLog, CartItem, Reset, Pass, Admin, Search } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()

export class UserService {
  list: AddItem[];
  items: CartItem[] = [];
  isAuthenticated = false;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public checkStatus={}

  public logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }
  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  readonly rootUrl = 'http://localhost:50278';
  constructor(private http: HttpClient,
    private router: Router) { }

  public loginUser(login: UserLog): Observable<any> {
    this.loggedIn.next(true);
    localStorage.setItem('loggedUser', login.Email);
    const body: UserLog = {
      Password: login.Password,
      Email: login.Email,
    }
    localStorage.setItem('loggedUser', login.Email);
    this.isAuthenticated = true;
    return this.http.post(this.rootUrl + '/Login', body);
  }
  public logOut() {
    sessionStorage.removeItem('Email');
    this.loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }

  public resetUser(reset: Reset): Observable<any> {
    const body: Reset = {
      Email: reset.Email
    }
    return this.http.post(this.rootUrl + '/Forget', body);
  }
  public resetPassword(pass: Pass) {
    const body: Pass = {
      Password: pass.Password,
      MobileNumber: pass.MobileNumber
    }
    return this.http.put(this.rootUrl + '/ResetPassword/' + pass.MobileNumber, body);
  }
  public registerUser(user: User) {
    const body: User = {
      MobileNumber: user.MobileNumber,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/StuffKart', body);
  }

  public addproduct(additem: AddItem) {
    const body: AddItem = {
      productName: additem.productName,
      productDescription: additem.productDescription,
      price: additem.price,
      size: additem.size,
      image: additem.image,
      quantity: additem.quantity,
      total: additem.total
    }
    return this.http.post(this.rootUrl + '/AddProduct', body);
  }

  public getdetails() {
    this.http.get(this.rootUrl + '/AddProduct').toPromise().then(res => this.list = res as AddItem[]);
  }
  public searchProduct(searchText: string){
       this.http.get(this.rootUrl + '/SearchBar/' + searchText).toPromise().then(res => this.list = res as AddItem[]);
      
  }
  // getcartdetails(){
  //   this.http.get(this.rootUrl +'/CartDetails').toPromise().then(res =>this.items=res as CartItem[]);
  // }
  public addToCart(product: CartItem) {
    const body: CartItem = {
      productName: product.productName,
      productDescription: product.productDescription,
      price: product.price,
      size: product.size,
      quantity: product.quantity,
      total: product.total
    }
    this.items.push(product);
    return this.http.post(this.rootUrl + '/CartDetails', body);
  }
  public adminLogin(admin: Admin): Observable<any> {
    const body: Admin = {
      Password: admin.Password,
      Admin: admin.Admin
    }
    return this.http.post(this.rootUrl + '/AdminLogin', body);
  }
  public c(product: CartItem) {
    // const body: CartItem={
    //   productName: product.productName,
    //   productDescription: product.productDescription,
    //   price: product.price,
    //   size: product.size
    //   }
    this.http.post(this.rootUrl + '/CartDetails', product);
    this.items.push(product);

  }
  public getItems() {
    return this.items;
  }
  public clearCart() {
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