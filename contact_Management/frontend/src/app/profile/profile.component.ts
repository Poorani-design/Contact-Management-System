import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api :ApiServiceService) { }
  readUser:any;
  ngOnInit(): void {
    this.getAllUser();
    }
  
  getAllUser(){
    this.api.getAllUser().subscribe((res)=>{
      this.readUser = res.data;
    });
  }
}
