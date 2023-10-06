import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent implements OnInit {
  ShowFlip:boolean = false;
  loginSubmitted:boolean = false;
  ObjDoctor:Doctor = new Doctor();
  ObjPatentr:Patent = new Patent();
  show:boolean = false;
  password :any;
  masseage:string = '';
  constructor(private _router: Router ){}
  ngOnInit(): void {
    this.password = 'password'
  }
  onClick(){
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  flipOff(){
    this.ShowFlip = !this.ShowFlip;
    this.loginSubmitted = false
    this.ObjDoctor = new Doctor();
    this.ObjPatentr = new Patent();
    this.masseage = ''
  }
  Authlogin(valid:any){
    this.masseage = ''
    this.loginSubmitted = true
    if(valid){
      if(this.ObjDoctor.Password === 'admin' && this.ObjDoctor.Password ==='admin'){
        console.log('this.ObjDoctor',this.ObjDoctor)
        this.ObjDoctor = new Doctor();
        this.loginSubmitted = false
        this._router.navigate(['/Dashboard'])
      }
     else if(this.ObjPatentr.Password === 'admin' && this.ObjPatentr.Password ==='admin'){
        console.log('this.ObjPatentr',this.ObjPatentr)
        this.loginSubmitted = false
        this.ObjPatentr = new Patent();
        this._router.navigate(['/Dashboard'])
      }else {
        this.masseage = 'Invalid Username and Password'
      }
    }
    
  }
  
}
class Doctor{
  user_name:any;
  Password:any;
}
class Patent{
  user_name:any;
  Password:any;
}
