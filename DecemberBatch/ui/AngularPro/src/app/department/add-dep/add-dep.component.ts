import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent {
  constructor(private service: SharedService) { }

  @Input() dep: any;
  DepartmentId: any;
  DepartmentName: any;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

saveDepartment(){
  var val = {DepartmentId:this.DepartmentId,
  DepartmentName:this.DepartmentName };
  this.service.addDepartment(val).subscribe(res=>{
    alert(res.toString());
  });
}

updateDepartment(){
  var val = {DepartmentId:this.DepartmentId,
  DepartmentName: this.DepartmentName};
  this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
  });
}

}
