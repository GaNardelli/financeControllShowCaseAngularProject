import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnIncomeExpenseComponent } from './column-income-expense-component';

describe('ColumnIncomeExpenseComponent', () => {
  let component: ColumnIncomeExpenseComponent;
  let fixture: ComponentFixture<ColumnIncomeExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnIncomeExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnIncomeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
