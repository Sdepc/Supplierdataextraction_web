import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  Contentdata: any;
  AllContracts: any;
  constructor(private fservice: FilesService) { }

  ngOnInit() {
    this.getAllContracts();
  }
  getAllContracts() {
    this.fservice.getAllContracts().subscribe(data => {
      this.AllContracts = data;
      this.getContentdata(this.AllContracts[0])
    });
  }
  liClicked(data) {
    console.log(data);
    this.getContentdata(data)

  }
  getContentdata(value) {
    this.Contentdata = value;
  }
}
