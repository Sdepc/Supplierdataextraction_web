import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.css']
})
export class ProcessPageComponent implements OnInit {

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
      "label": "Summary Output"
    }
  ];
}
