import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,NgbModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   encapsulation:ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  Feed_Backkkk: any = undefined;
  CeolevleDetails:any[] = [];
  constructor(private _router: Router, private modalService: NgbModal ){}
  ngOnInit(): void {
    this.CeolevleDetails = [
      {
        Img_path: '../../../assets/images/ourteam/img-02.jpg',
        Levle: 'Founder, C.E.O , Creator',
        Name :'Ranjit Kumar'
      },
      {
        Img_path: '../../../assets/images/ourteam/img-02.jpg',
        Levle: 'Founder, C.E.O , Creator',
        Name :'Ranjit Kumar'
      },
      {
        Img_path: '../../../assets/images/ourteam/img-02.jpg',
        Levle: 'Founder, C.E.O , Creator',
        Name :'Ranjit Kumar'
      },
    ]
     
    localStorage.clear();
  }
  OpenDilog(contain:any) {
   this.modalService.open(contain, { centered: true,backdropClass: 'light-blue-backdrop', windowClass: 'dark-modal' },); 
  }
  FeeedBack() {
    if (this.Feed_Backkkk !== undefined) {
       this.modalService.dismissAll()
    localStorage.setItem('Feeedback', JSON.stringify(this.Feed_Backkkk));
    this.Feed_Backkkk = undefined;
    }
  }
 

}
