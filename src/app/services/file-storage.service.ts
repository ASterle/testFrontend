import {Injectable} from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {UploadFile} from "../models/upload-file.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private http: HttpClient) {
  }

  getFiles(): Observable<UploadFile[]> {
    return this.http.get<UploadFile[]>("http://localhost:8080/storage");
  }

  uploadFile(json: string) {
    this.http.post<HttpStatusCode>("http://localhost:8080/storage", json, {
      headers: {'Content-Type': 'application/json'},
      observe: 'response'
    }).subscribe(response => {
      console.log(response.body)
    });
  }

  getBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((<string>reader.result).split("base64,")[1]);
      reader.onerror = error => reject(error);
    });
  }
}
