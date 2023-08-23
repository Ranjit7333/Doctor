import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainContPageComponent } from './main-cont-page/main-cont-page.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
   {
      path: "",
      redirectTo: "Home",
      pathMatch: "full"
    },
    {
      path: "Home",
      component: MainContPageComponent
    },
    {
      path: "About",
      component: AboutComponent
    },
    {
      path: "Contact_US",
      component: ContactUsComponent
    },
     {
      path: "Doctor_Login",
      component: DoctorLoginComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
