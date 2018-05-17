import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  AllContracts: any;
  constructor(private fservice:FilesService) { }

  ngOnInit() {
    this.getAllContracts();
  }
  getAllContracts() {
    this.fservice.getAllContracts().subscribe(data => {
      this.AllContracts = data;
      console.log(this.AllContracts)
    });
  }
}
