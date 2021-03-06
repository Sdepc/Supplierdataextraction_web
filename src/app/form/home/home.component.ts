import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilesService } from '../services/files.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: any;
  messagedata: any;
  @ViewChild('uploadfile') myInputVariable: ElementRef;
  filesToUpload: Array<File> = [];
  selectedIds = [];
  loading: boolean = false;
  successMessageAlert = false;
  successMessage: any;
  interval: any;
   constructor(private fservice: FilesService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('firstname')) {
      this.loading = false;
      this.selectedIds = [];
      this.filesToUpload = [];
      this.messagedata = [];
      this.getAllFiles();
      this.interval = setInterval(() => {
        this.getAllFiles();
      }, 60000);

    }
    else {
      this.router.navigate(['login']);
    }

  }
  getAllFiles() {
    this.fservice.getFiles().subscribe(data => {
      this.files = data;
      console.log('1 min are over!');
    });
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    this.fservice.filesUpload(formData).subscribe(data => {
      this.messagedata = data;
      // this.successMessageAlert=true;
      //this.successMessage="File(s) uploaded successfully"
      console.log(this.messagedata);
      for (let i = 0; i < this.messagedata.length; i++) {
        console.log(this.messagedata[i]);
        let key;
        for (key in this.messagedata[i]) {
          if (this.messagedata[i].hasOwnProperty(key)) {
            if (key === "Error_File_Name") {
              console.log(this.messagedata[i]['Error_File_Name']);
              alert(this.messagedata[i]['Error_File_Name'] + " - File already exists")
            }
            if (key === "Success_File_Name") {
              console.log(this.messagedata[i]['Success_File_Name']);
              alert(this.messagedata[i]['Success_File_Name'] + " - File has been uploaded successfully ")
            }
          }
        }
      }
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
  OnCheckboxSelect(fileinfo, event) {
    if (event.target.checked === true) {
      this.selectedIds.push({ name: fileinfo.filename });
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item.name !== fileinfo.filename);
    }
    console.log(this.selectedIds);
  }
  Process() {
    this.fservice.process(this.selectedIds).subscribe(result => {
      /* if (result['Message'] == 'Success') {
        alert('Sucessfully processed selected files')
        this.loading = false;
        this.getAllFiles();
      } */
    });
    setTimeout(() => {
      console.log('3 seconds are over!');
      this.getAllFiles();
    }, 2000);

  }
  delete(value) {
    this.fservice.deletefile(value.filename).subscribe(result => {
      console.log(result);
      if (result == '1') {
        alert('Sucessfully processed selected files')
        this.getAllFiles();
      }
    });

  }
}
