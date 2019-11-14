import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoragesService } from './storages.service';

describe('StoragesService', () => {
  let service: StoragesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: StoragesService = TestBed.get(StoragesService);
    expect(service).toBeTruthy();
  });
  it('it should remove storage', () => {
    const key = 'Nare';

  })
});
