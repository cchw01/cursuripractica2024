import { TestBed } from '@angular/core/testing';

import { InventoryListMockService } from './inventory-list-mock.service';

describe('InventoryListMockService', () => {
  let service: InventoryListMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryListMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
