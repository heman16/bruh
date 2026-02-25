import { TestBed } from '@angular/core/testing';

import { ImageSerivceService } from './image-serivce.service';

describe('ImageSerivceService', () => {
  let service: ImageSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
