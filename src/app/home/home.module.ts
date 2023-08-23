import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HederComponent} from './heder/heder.component'
import {FooterComponent} from './footer/footer.component'
import { MainContPageComponent } from './main-cont-page/main-cont-page.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
@NgModule({
  declarations: [
    HomeComponent,
    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HederComponent,
    FooterComponent,
    MainContPageComponent,
    AboutComponent,
    DoctorLoginComponent,
    ContactUsComponent
   
  ]
})
export class HomeModule { }
