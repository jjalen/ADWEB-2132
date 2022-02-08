import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

Studname = '';
Idno = '';
Pregr = 0;
Midgr = 0;
Fingr = 0;
Aveg = 0;

  getStud(data: any){
    this.Studname = data;
  }
  getID(data: any){
    this.Idno = data;
  }
  getPre(data: any){
    this.Pregr = data;
  }
  getMid(data: any){
    this.Midgr = data;
  }
  getFin(data: any){
    this.Fingr = data;
  }

  ShowName = '';
  ShowID = '';
  ShowPre =  0;
  ShowMid = 0;
  ShowFin = 0;
  ShowAveg = 0;
  showGrade($event: any) {
    if ($event) {
      this.ShowName = this.Studname;
      this.ShowID = this.Idno;
      this.ShowPre = this.Pregr;
      this.ShowMid = this.Midgr;
      this.ShowFin = this.Fingr;
    this.ShowAveg = Math.trunc(+this.Pregr + +this.Midgr + +this.Fingr) / 3;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
