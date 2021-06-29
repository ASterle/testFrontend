import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {UploadFile} from "./upload-file.model";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public fileNames: Array<String> = [];

  constructor(private http: HttpClient) {
  }

  onFileSelected(event: any) {
    let files = event.target.files;

    if (files.length != 0) {
      for (var file of files) {
        this.fileNames.push(file.name);
        this.getBase64(file).then(
          (data: string) => {
            let uploadFile: UploadFile[] = [new UploadFile(file.name, data)];
            this.upload(JSON.stringify(uploadFile))
          }
        );
      }
    }
  }

  upload(json: string) {
    console.log(json);

    this.http.post<HttpStatusCode>("http://localhost:8080/storage", json, {
      headers: {'Content-Type': 'application/json'},
      observe: 'response'
    })
      .subscribe(response => {
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

  ngOnInit(): void {
  }

}
