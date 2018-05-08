import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  steps = [
    {
      "number": 1,
      "label": "Upload",
      "active": true
    },
    {
      "number": 2,
      "label": "Process",
      "active": true
    },
    {
      "number": 3,
      "label": "Summary Output",
      "active": true
    }
  ];
}
