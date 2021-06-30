import {UploadFile} from './upload-file.model';

describe('UploadFile', () => {
  it('should create an instance', () => {
    expect(new UploadFile("name", "base64")).toBeTruthy();
  });
});
