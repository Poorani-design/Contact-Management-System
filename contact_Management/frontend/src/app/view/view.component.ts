import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
          cdob:str_to_date(res.data[0].cdob),
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
}
function str_to_date(cdob: any): any {
  // return str_to_date(res.data[0].cdob);
}

