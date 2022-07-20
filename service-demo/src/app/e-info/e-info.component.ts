import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent implements OnInit {

  emp1: string[] = [];
  emp2: string[] = []
  emp3: string[] = []

  constructor(private service: DataService) { }
  getEmpInfo1() {
    this.emp1 = this.service.getEmpInfoFromService1();
  }
  getEmpInfo2() {
    this.emp2 = this.service.getEmpInfoFromService2();
  }
  getEmpInfo3() {
    this.emp3 = this.service.getEmpInfoFromService3();
  }

  updateInfo(frm: string) {
    this.service.addEmp1Info(frm);
    // this.emp1.push(frm);

  }
  ngOnInit(): void {
  }

}
