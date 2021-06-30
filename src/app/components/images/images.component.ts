import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileService} from "../../services/file.service";


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @ViewChild('attachments') attachment: any;

  private readonly _endpointUrl = "http://localhost:8080/image/";
  public method: string | undefined;

  public selectedFile: File | undefined;
  public parameter: string | undefined | null;
  public rValue: number | null;
  public gValue: number | null;
  public bValue: number | null;

  constructor(private uploadService: UploadService,
              private fileService: FileService) {
    this.rValue = 1;
    this.gValue = 1;
    this.bValue = 1;
  }

  methodForm = new FormGroup({
    methodControl: new FormControl('', Validators.required)
  });

  parameterForm = new FormGroup({
    parameterControl: new FormControl('', Validators.nullValidator)
  });

  ngOnInit(): void {
  }


  uploadImage() {
    if (this.selectedFile == undefined) {
      return;
    }

    if (this.method === "color") {
      this.parameter = this.rValue + "," + this.gValue + "," + this.bValue;
    }

    let url = this._endpointUrl + this.method;
    if (this.parameter != undefined) {
      url = url.concat("/", this.parameter);
    }

    this.fileService.fileToBase64(this.selectedFile).then(
      (fileData: string) => {
        if (this.selectedFile == undefined) {
          return;
        }

        let filename = this.selectedFile.name;
        if (this.method === "format") {
          filename = this.selectedFile.name.split(".")[0] + "." + this.parameter?.slice(1);
        }

        this.uploadService.uploadFileDownloadResponse(url, fileData, filename);
      }
    );
  }

  changeMethod(event: any) {
    this.method = event.target.value;
    this.resetValues();
  }

  changeFormatType(event: any) {
    this.parameter = event.target.value;
  }

  uploadIsValid(): boolean {
    if (this.selectedFile == undefined || this.methodForm.invalid) {
      return false;
    }

    if (this.method === "format" && (this.parameter == undefined || this.parameterForm.invalid)) {
      return false;
    }

    return true;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  private resetValues() {
    this.parameter = undefined;
    this.selectedFile = undefined;

    this.rValue = 1;
    this.gValue = 1;
    this.bValue = 1;

    this.attachment.nativeElement.value = '';
  }
}
