import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Search } from '../shared/user.model';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  userDisplayName: string | null;
  public searchText:any;
  public keyword: string;
  constructor(private userService: UserService, private router: Router) { }

  public ngOnInit(): void {
    this.isLoggedIn$=this.userService.isLoggedIn;
    this.userDisplayName = localStorage.getItem('loggedUser');
  }
  public logOut() {
    localStorage.removeItem('loggedUser');
    this.userService.logOut();
  }
  public search(){
    this.keyword=this.searchText;
    this.userService.searchProduct(this.keyword);
  }
  // public resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.reset();
  //   this.search = {
  //     ProductName:''
  //   }
  // }
  // public async OnSubmit(form: NgForm): Promise<void> {
  //   this.userService.searchProduct(form.value)
  //   .subscribe(()=>{
  //   });
  // }
  
}
