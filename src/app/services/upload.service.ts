import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UploadFile} from "../models/upload-file.model";
import {Observable, Subscription, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {
  }

  getFiles(url: string): Observable<UploadFile[]> {
    return this.http.get<UploadFile[]>(url);
  }

  uploadFile(url: string, json: string) {
    return this.http.post(url, json, {
      headers: {'Content-Type': 'application/json'},
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(this.errorMgmt));
  }

  uploadFileDownloadResponse(url: string, base64: string, filename: string): Subscription {
    return this.http.post(url, base64, {
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

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
