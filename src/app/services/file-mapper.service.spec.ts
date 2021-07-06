import {TestBed} from '@angular/core/testing';

import {FileMapperService} from './file-mapper.service';

describe('FileMapperService', () => {
  let service: FileMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
