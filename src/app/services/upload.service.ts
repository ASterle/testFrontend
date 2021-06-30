import {Injectable} from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {UploadFile} from "../models/upload-file.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {
  }

  getFiles(url: string): Observable<UploadFile[]> {
    return this.http.get<UploadFile[]>(url);
  }

  uploadFile(json: string, url: string) {
    this.http.post<HttpStatusCode>(url, json, {
      headers: {'Content-Type': 'application/json'},
      observe: 'response'
    }).subscribe(response => {
      console.log(response.body)
    });
  }

  uploadFileDownloadResponse(url: string, base64: string, filename: string): void {
    this.http.post(url, base64, {
      headers: {'Content-Type': 'plain/text'},
      responseType: 'blob'
    }).subscribe(response => {
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(response);
        if (filename) {
          downloadLink.setAttribute('download', filename);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
      }
    )
  }
}
