import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  firstname: any;
  userid: any;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('userid')) {
      this.login = true;
      this.firstname = localStorage.getItem('firstname');
      this.userid = localStorage.getItem('userid');

    }
  }

}
