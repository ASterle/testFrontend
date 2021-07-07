import {TestBed} from '@angular/core/testing';

import {DownloadService} from './download.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DownloadService', () => {
  let service: DownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
