import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadFile} from "../../models/upload-file.model";
import {UploadService} from "../../services/upload.service";
import {FileMapperService} from "../../services/file-mapper.service";
import {Observable} from "rxjs";
import {HttpEvent, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  @ViewChild('fileInput') attachment: any;

  public progress: number = 0;

  public uploadFiles$: Observable<UploadFile[]> | undefined;
  public toUpload: File[] = [];

  private readonly _endpointUrl = "http://localhost:8080/storage";

  constructor(private uploadService: UploadService,
              private fileService: FileMapperService) {
  }

  uploadFiles() {
    this.fileService.filesToUploadFiles(this.toUpload).then(uploadFiles => {
      this.uploadService.uploadFile(this._endpointUrl, JSON.stringify(uploadFiles))
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request has been made!');
              this.progress = 1;
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has been received!');
              break;
            case HttpEventType.UploadProgress:
              // @ts-ignore
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Uploaded! ${this.progress}%`);
              break;
            case HttpEventType.Response:
              console.log('Files successfully uploaded!', event.body);

              this.onUploadFinish();

              setTimeout(() => {
                this.progress = 0;
              }, 1500);
          }
        })
    })
  }

  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      this.toUpload.push(event.target.files[i])
    }

    this.attachment.nativeElement.value = '';
  }


  /**
   * Delete file from toUpload list at index
   * @param index
   */
  removeSelectedFile(index: number) {
    this.toUpload.splice(index, 1);
  }

  onUploadFinish() {
    this.attachment.nativeElement.value = '';
    this.toUpload = [];
    this.uploadFiles$ = this.uploadService.getFiles(this._endpointUrl);
  }


  ngOnInit(): void {
    this.uploadFiles$ = this.uploadService.getFiles(this._endpointUrl);
  }

}
