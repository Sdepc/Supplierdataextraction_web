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
  selectedIds = [];
  loading: boolean = false;
  successMessageAlert = false;
  successMessage: any;
  constructor(private fservice: FilesService, private http: HttpClient) { }

  ngOnInit() {
    this.loading = false;
    this.selectedIds = [];
    this.filesToUpload = [];
    this.getAllFiles();
  }
  getAllFiles() {
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
    this.fservice.filesUpload(formData).subscribe(data => {
      // this.successMessageAlert=true;
      //this.successMessage="File(s) uploaded successfully"
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
    this.loading = true;
    console.log(this.selectedIds);
    this.fservice.process(this.selectedIds).subscribe(result => {
      console.log(result);
      console.log(result['Message'])
      if (result['Message'] == 'Success') {

        alert('Sucessfully processed selected files')
        this.loading = false;
        this.getAllFiles();
      }
    });
  }
  delete() {
    alert('Sucessfully deleted selected file')
  }
}
