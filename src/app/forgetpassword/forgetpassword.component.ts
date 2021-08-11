import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Reset } from '../shared/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  public reset: Reset;

  constructor(private userService : UserService,
    public readonly router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  public resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.reset = {
      Email: '',
    }
  }

  public async OnSubmit(form: NgForm): Promise<void> {
    this.userService.resetUser(form.value)
    .subscribe(()=>{
      // sessionStorage.setItem('loggedUser', this.login.Email);
      //this.userService.loginUser(this.loginUser.Email);
     this.router.navigateByUrl('pass');
    this.resetForm(form);
    });
  }
}
