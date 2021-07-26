
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { User, UserLog } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:50277';
  constructor(private http: HttpClient) { }
  public loginUser(login : UserLog): Observable<any>{
    const body: UserLog = {
      Password: login.Password,
      Email: login.Email,
    }
    return this.http.post(this.rootUrl + '/StuffKart/Login', body);
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

}