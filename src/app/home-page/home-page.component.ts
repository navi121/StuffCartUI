import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserService } from '../shared/user.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    // this.userDisplayName = sessionStorage.getItem('loggedUser');
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
}

