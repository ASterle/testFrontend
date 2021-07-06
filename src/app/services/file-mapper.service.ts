import {Injectable} from '@angular/core';
import {UploadFile} from "../models/upload-file.model";

@Injectable({
  providedIn: 'root'
})
export class FileMapperService {

  constructor() {
  }

  fileToBase64(file: File): Promise<[string, string]> {
    return new Promise<[string, string]>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve([(<string>reader.result).split("base64,")[1], file.name]);
      reader.onerror = error => reject(error);
    });
  }

  base64ToFile(base64: string, fileName: string, mimetype: string): File {
    const imageBlob = FileMapperService.dataURItoBlob(base64, mimetype);
    return new File([imageBlob], fileName, {type: mimetype});
  }

  filesToUploadFiles(files: FileList | File[]): Promise<UploadFile[]> {
    return new Promise<UploadFile[]>((resolve, reject) => {
      let filePromises = [];
      for (let i = 0, file: File; file = files[i]; i++) {
        filePromises.push(this.fileToBase64(file));
      }

      let uploadFiles: UploadFile[] = [];
      Promise.all(filePromises).then(result => {
        for (let i = 0, fileData: [string, string]; fileData = result[i]; i++) {
          uploadFiles.push(new UploadFile(fileData[1], fileData[0]))
        }

        resolve(uploadFiles);
      }).catch(error => console.log(error))
    });
  }

  private static dataURItoBlob(dataURI: string, mimetype: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: mimetype});
    return blob;
  }
}
