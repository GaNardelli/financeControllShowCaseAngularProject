import { TestBed } from '@angular/core/testing';

import { ManageExpensesService } from './manage-expenses-service';

describe('ManageExpensesService', () => {
  let service: ManageExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
