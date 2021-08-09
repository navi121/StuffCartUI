import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminuploadComponent } from './adminupload/adminupload.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    LoginComponent,
    ErrormessageComponent,
    NavbarComponent,
    CarouselComponent,
    AdminuploadComponent,
    SellerloginComponent,
    CartdetailsComponent,
    CheckoutComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
