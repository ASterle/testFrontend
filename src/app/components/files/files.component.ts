import {Component, OnInit} from '@angular/core';
import {UploadFile} from "../../models/upload-file.model";
import {FileStorageService} from "../../services/file-storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public fileNames: Array<String> = [];
  public files$: Observable<UploadFile[]>;

  constructor(private fileService: FileStorageService) {
    this.files$ = this.fileService.getFiles();
  }

  onFileSelected(event: any) {
    let files = event.target.files;

    if (files.length != 0) {
      for (var file of files) {
        this.fileNames.push(file.name);
        this.fileService.getBase64(file).then(
          (data: string) => {
            let uploadFile: UploadFile[] = [new UploadFile(file.name, data)];
            this.fileService.uploadFile(JSON.stringify(uploadFile))
          }
        );
      }
    }
  }


  ngOnInit(): void {
  }

}
