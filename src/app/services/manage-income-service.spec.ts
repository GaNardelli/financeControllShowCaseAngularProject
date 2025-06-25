import { TestBed } from '@angular/core/testing';

import { ManageIncomeService } from './manage-income-service';

describe('ManageIncomeService', () => {
  let service: ManageIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
