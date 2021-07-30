import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
import { UserLog } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: UserLog;
  loginUser: any;

  public constructor(private userService: UserService,
    public readonly router: Router) { }

  public ngOnInit(): void {
    this.resetForm();
  }

  public resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.login = {
      Email: '',
      Password: '',
    }
  }

  public async OnSubmit(form: NgForm): Promise<void> {
    this.userService.loginUser(form.value)
    .subscribe(()=>{
      // sessionStorage.setItem('loggedUser', this.login.Email);
      //this.userService.loginUser(this.loginUser.Email);
     this.router.navigateByUrl('home');
    this.resetForm(form);
    });
  }
}
