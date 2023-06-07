import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {

  constructor(private service:SharedService){}

  EmployeeList:any=[];

  ModalTitle:any;
  ActivateAddEditEmp:boolean=false;
  emp:any;

  
  ngOnInit():void {
    this.refreshEmpList();
  }

addClick(){
  this.emp={
    EmployeeId:0,
    EmployeeName:"",
    Department:"",
    Salary:""
  }
  
  this.ModalTitle="Add Employees";
  this.ActivateAddEditEmp=true;
}



editClick(item:any){
  this.emp=item;
  this.ModalTitle="Edit Employee";
  this.ActivateAddEditEmp=true;
}

closeClick(){
  this.ActivateAddEditEmp=false;
  this.refreshEmpList();
}

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data
    })
  }

}
