import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private api :ApiServiceService) { }
  readUser:any;
  successMsg:any;
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.api.getAllUser().subscribe((res)=>{
      this.readUser = res.data;
    });
  }
  // delete user in component 
  deleteUser(id:any){
    console.log("deleted");
    this.api.deleteUser(id).subscribe((res)=>{
      console.log(res,"Deleted successfully..");
      this.successMsg="Deleted successfully";
      this.getAllUser();
    })
  }

  // update user in component file
  // updateUser(data:any,id:any){
  //   this.api.updateUser(data:any,id:any).subscribe((res)=>{
  //     console.log(res,"Updated successfully..");
  //   })
  // }


}
