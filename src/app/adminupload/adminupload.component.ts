import { Component, OnInit } from '@angular/core';
import { AddItem } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminupload',
  templateUrl: './adminupload.component.html',
  styleUrls: ['./adminupload.component.css']
})
export class AdminuploadComponent implements OnInit {
  public additem:AddItem;
  
  constructor(private userService : UserService,
    public readonly router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
 
  public resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.additem = {
      productName:'',
      productDescription:'',
      price:'',
      size:'',
      image:''
    }
  }
  public async OnSubmit(form: NgForm): Promise<void> {
    this.userService.addproduct(form.value)
    .subscribe(()=>{
      this.router.navigateByUrl('home');
    this.resetForm(form);
    });
  }
}
 