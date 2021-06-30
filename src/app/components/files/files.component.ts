import {Component, OnInit} from '@angular/core';
import {UploadFile} from "../../models/upload-file.model";
import {UploadService} from "../../services/upload.service";
import {Observable} from "rxjs";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public fileNames: Array<String> = [];
  public files$: Observable<UploadFile[]>;

  private readonly _endpointUrl = "http://localhost:8080/storage";

  constructor(private uploadService: UploadService,
              private fileService: FileService) {
    this.files$ = this.uploadService.getFiles(this._endpointUrl);
  }

  onFileSelected(event: any) {
    let files = event.target.files;

    if (files.length != 0) {
      for (var file of files) {
        this.fileNames.push(file.name);
        this.fileService.fileToBase64(file).then(
          (fileData: string) => {
            let uploadFile: UploadFile[] = [new UploadFile(file.name, fileData)];
            this.uploadService.uploadFile(this._endpointUrl, JSON.stringify(uploadFile))
          }
        );
      }
    }
  }


  ngOnInit(): void {
  }

}
