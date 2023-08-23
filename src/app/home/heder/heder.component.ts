import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heder',
  standalone: true,
  imports: [CommonModule,RouterModule,NgbModule,FormsModule],
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HederComponent implements OnInit {
  JOINSubmitted: boolean = false;
  Objjoin: join = new join();
  constructor(private _router: Router, private modalService: NgbModal ){}
  ngOnInit(): void {
    localStorage.clear()
  }
  OpenDilog(content: any) {
    this.JOINSubmitted = false;
    this.Objjoin = new join();
  this.modalService.open(content, { centered: true,backdropClass: 'light-blue-backdrop', windowClass: 'dark-modal' },);
  }
  join(valid:any) {
    this.JOINSubmitted = true;
    if (valid) {
      this.JOINSubmitted = false;
      this.modalService.dismissAll()
      localStorage.setItem('join_Details', JSON.stringify(this.Objjoin))
    }
  }

  login() { }
 

}
class join {
  Name: any;
  Mobile_No: any;
  E_Mail: any;
}
