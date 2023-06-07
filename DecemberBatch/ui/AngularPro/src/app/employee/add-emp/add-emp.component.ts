import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  constructor(private service: SharedService) { }


  @Input() emp: any;
  EmployeeId: any;
  EmployeeName: any;
  Department: any;
  Salary: any;

  ngOnInit(): void {
    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.Salary = this.emp.Salary;
  }


  saveEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Salary: this.Salary
    };
    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    })
  }


}
