import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent {

  constructor(private service:SharedService){}

  DepartmentList:any=[];

  ModalTitle:any;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit():void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add New Department";
    this.ActivateAddEditDepComp=true;
  }


editClick(item:any){
  this.dep=item;
  this.ModalTitle="Edit Department";
  this.ActivateAddEditDepComp=true;
}

deleteClick(item:any){
  if(confirm('Are You Sure..?')){
    this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
      alert(data.toString());
      this.refreshDepList();
    })
  }
}



closeClick(){
  this.ActivateAddEditDepComp=false;
  this.refreshDepList();
}


refreshDepList(){
  this.service.getDepList().subscribe(data=>{
    this.DepartmentList=data
  })
}

}
