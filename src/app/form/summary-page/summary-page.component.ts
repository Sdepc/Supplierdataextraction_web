import { Component, OnInit, ViewChildren } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  ckbpurge = false;
  Contentdata: any;
  AllContracts: any;
  selectedIds = [];
  @ViewChildren('myItem') item;
  constructor(private fservice: FilesService) { }

  ngOnInit() {
    this.getAllContracts();
  }
  getAllContracts() {
    this.AllContracts=[];
    this.fservice.getAllContracts().subscribe(data => {
      this.AllContracts = data;
      console.log(this.AllContracts);
      //undefined
      if(this.AllContracts.length > 0){
      this.getContentdata(this.AllContracts[0])
      }
    });
  }
  liClicked(data) {
    this.getContentdata(data)
  }
  getContentdata(value) {
    this.fservice.getContractdata(value).subscribe(result => {
      //console.log(result["Data"])
      this.Contentdata = result["Data"];
    });

  }
  OnCheckboxSelect(id, event) {
    if (event.target.checked === true) {
      this.selectedIds.push({ name: id });
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item.name !== id);
    }
  }
  purge() {
    this.fservice.purge(this.selectedIds, this.ckbpurge).subscribe(result => {
      console.log(result['Message'])
      if (result['Message'] == 'Sucessfully deleted files') {
        alert('Sucessfully deleted files')
        this.getAllContracts();
      }
    });

  }
}
