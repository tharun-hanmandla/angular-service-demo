import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  emp1: string[] = ["tharun", "123", "t@gmsil"];
  emp2: string[] = ["sagar", "1234", "s@gmail"];
  emp3: string[] = ["thrinath", "12345", "t3@gmail"];

  getEmpInfoFromService1() {
    return this.emp1;
  }
  getEmpInfoFromService2() {
    return this.emp2;
  }
  getEmpInfoFromService3() {
    return this.emp3;
  }
  addEmp1Info(frm: string) {
    return this.emp1.push(frm);

  }
  constructor() { }
}
