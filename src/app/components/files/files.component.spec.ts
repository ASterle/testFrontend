import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilesComponent} from './files.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FilesComponent', () => {
  let component: FilesComponent;
  let fixture: ComponentFixture<FilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilesComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "No" button disabled', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#upload-btn');
    expect(btn).toBeFalsy();
  });
});
