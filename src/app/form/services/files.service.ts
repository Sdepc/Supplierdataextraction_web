import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {

  API_URL: any = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getFiles() {
    let url = `${this.API_URL}/files/getfilescontent`;
    return this.http.get(url);
  }
  public getAllContracts() {
    let url = `${this.API_URL}/summary/contractnames`;
    return this.http.get(url);
  }
  public getContractdata(name) {
    let url = `${this.API_URL}/summary/contractcontent?filename=` + name;
    return this.http.get(url);
  }
  public filesUpload(postdata) {
    console.log('POST');
    console.log(postdata);
    let url = `${this.API_URL}/files/upload?username=` + localStorage.getItem('userid');
    return this.http.post(url, postdata);
  }
  public purge(data, days) {
    let url = `${this.API_URL}/summary/purge?days=` + days;
    return this.http.post(url, data);
  }
  public process(data) {
    let url = `${this.API_URL}/processed/pythonscripts`;
    return this.http.post(url, data);
  }
  public deletefile(name) {
    let url = `${this.API_URL}/files/deletefile?fname=` + name;
    return this.http.post(url, null);
  }
  public authenticate(userid, password) {
    let data = { "userName": userid, "password": password }
    let url = "http://64.102.179.170:8080/scde-api/user/authentication";
    return this.http.post(url, data);
  }
}
