import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from '../form/services/files.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID: any;
  Password: any;
  constructor(private service: FilesService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }
  onSubmit(form: any) {
    this.service.authenticate(form.userid, form.password).subscribe(logindata => {
      if (form.userid === logindata[0].username && form.password === logindata[0].password) {
        localStorage.setItem('firstname', logindata[0].firstname);
        localStorage.setItem('lastname', logindata[0].lastname);
        localStorage.setItem('userid', logindata[0].username);
        this.router.navigate(['home']);
      }
      else {
        alert('Please check your CEC ID and Password');
      }
    },
      error => {
        alert('Please check your CEC ID and Password');
      });
  }
}
