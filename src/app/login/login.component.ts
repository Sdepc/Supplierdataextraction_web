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
  loginData: any = [];
  constructor(private service: FilesService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }
  onSubmit(form: any) {
    this.service.authenticate(form.userid, form.password).subscribe(result => {
      console.log(result);
      if (result['description']) {
        localStorage.setItem('firstname', result['description']);
        localStorage.setItem('userid', result['mail']);
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
