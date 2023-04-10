import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  // userForm!:FormGroup;

  errMsg: any;
  updateMsg: any;
  successMsg: string | undefined;
  getParamid: any;
  data: any;
  constructor(private api: ApiServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParamid = this.route.snapshot.paramMap.get('id');
    if (this.getParamid) {
      this.api.singleUser(this.getParamid).subscribe((res) => {
        console.log(res, 'get single user ');
        this.userForm.patchValue({
          cname: res.data[0].cname,
          cdob:res.data[0].cdob,
          cmail: res.data[0].cmail,
          ccontact: res.data[0].ccontact,
          caddress: res.data[0].caddress,
          cstreetname:res.data[0].cstreetname,
          ccity: res.data[0].ccity,
          cdistrict: res.data[0].cdistrict,
          cstate: res.data[0].cstate,
          cintroduction:res.data[0].cintroduction,
          clinkedin: res.data[0].clinkedin,
          cgithub: res.data[0].cgithub,
          cgender: res.data[0].cgender,
        });
      });
    }
  }
  userForm = new FormGroup({
    cname: new FormControl('', [Validators.required]),
    cdob: new FormControl('', [Validators.required]),
    cmail: new FormControl('', [Validators.required]),
    ccontact: new FormControl('', [Validators.required]),
    caddress: new FormControl('', [Validators.required]),
    cstreetname: new FormControl('', [Validators.required]),
    ccity: new FormControl('', [Validators.required]),
    cdistrict: new FormControl('', [Validators.required]),
    cstate: new FormControl('', [Validators.required]),

    cintroduction: new FormControl('', [Validators.required]),
    clinkedin: new FormControl('', [Validators.required]),
    cgithub: new FormControl('', [Validators.required]),
    cgender: new FormControl('', [Validators.required]),
  });
  userSubmit() {
    if (this.userForm.valid) {
      this.api.createUser(this.userForm.value).subscribe((res) => {
        console.log(res, 'Data added success ..');
        this.userForm.reset();
        this.successMsg = 'Created successfully';
      });
    } else {
      this.errMsg = 'All fields are required';
    }
  }
  updateUser() {
    if (this.getParamid) {
      console.log(this.userForm.value);
      this.api
        .updateUser(this.userForm.value, this.getParamid)
        .subscribe((res) => {
          console.log(res, 'Data updated successfully');
          this.updateMsg = 'Updated successfully... ';
        });
    }
  }
}
