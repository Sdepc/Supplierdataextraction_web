import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilesService } from '../services/files.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: any;
  @ViewChild('uploadfile') myInputVariable: ElementRef;
  filesToUpload: Array<File> = [];
  
  constructor(private fservice: FilesService, private http: HttpClient) { }

  ngOnInit() {
    this.getAllFiles();
  }
  getAllFiles() {
    console.log('all file');
    this.fservice.getFiles().subscribe(data => {
      this.files = data["files"];
    });
  }
 
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('pardhu' + formData)
    this.fservice.filesUpload(formData).subscribe(data => {
      alert('File(s) uploaded successfully')
      this.reset();
      this.getAllFiles();
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }
  reset() {
    this.myInputVariable.nativeElement.value = '';
  }
}
