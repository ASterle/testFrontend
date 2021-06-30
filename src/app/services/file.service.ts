import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((<string>reader.result).split("base64,")[1]);
      reader.onerror = error => reject(error);
    });
  }

  base64ToFile(base64: string, fileName: string, mimetype: string): File {
    const imageBlob = FileService.dataURItoBlob(base64, mimetype);
    return new File([imageBlob], fileName, {type: mimetype});
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
