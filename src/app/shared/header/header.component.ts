import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  firstname: any;
  lastname: any;
  isAdmin = false;
  userid: any;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('userid')) {
      this.login = true;
      this.firstname = localStorage.getItem('firstname');
      this.lastname = localStorage.getItem('lastname');
      this.userid = localStorage.getItem('userid');

    }
  }

}
