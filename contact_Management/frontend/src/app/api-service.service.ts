import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl ="http://localhost:3000/contact";

  // get all data 

  constructor(private http:HttpClient) { }
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}/getdata`);
  }

  // create contact data

  createUser(data:any):Observable<any>{
    console.log(data, "Data created successfully");
    return this.http.post(`${this.apiUrl}/create`,data);
  }
  // delete contact data
  deleteUser(id:any):Observable<any>{
    console.log(id,"Data was deleted successfully");
    return this.http.delete(`${this.apiUrl}/delete/${id}`,id);
  }

  // update contact data
  updateUser(data:any,id:any):Observable<any>{
    console.log(data,id, "Updated successfully");
    return this.http.put(`${this.apiUrl}/update/${id}`,data);
  }

  // get single contact data
  singleUser(id:any):Observable<any>{
    console.log(id,"Get single user successfully");
    console.log(`${this.apiUrl}/getdata/${id}`);
    return this.http.get(`${this.apiUrl}/getdata/${id}`);
  }


}
