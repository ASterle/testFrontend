export class UploadFile {
  fileName: string;
  fileContent: string;

  constructor(fileName: string, content: string) {
    this.fileName = fileName;
    this.fileContent = content;
  }
}
