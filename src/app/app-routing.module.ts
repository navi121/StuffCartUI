import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminuploadComponent } from './adminupload/adminupload.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'loggedUser', component:SignUpComponent},
  {path:'home', component:HomePageComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'addproduct',component:AdminuploadComponent},
  {path:'cart',component:CartdetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'error',component:ErrormessageComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'pass',component:ResetpasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
