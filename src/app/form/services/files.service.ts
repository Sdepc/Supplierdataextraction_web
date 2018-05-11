import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {

  API_URL: any = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getFiles() {
    return this.http.get("./assets/api/files.json")
  }
  public filesUpload(postdata) {
    let url = `${this.API_URL}/files/upload`;
    return this.http.post(url, postdata);
  }
}