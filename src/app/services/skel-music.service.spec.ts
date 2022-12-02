import { TestBed } from '@angular/core/testing';

import { SkelMusicService } from './skel-music.service';

describe('SkelMusicService', () => {
  let service: SkelMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkelMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
