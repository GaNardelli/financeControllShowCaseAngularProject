import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieExpenseChart } from './pie-expense-chart';

describe('PieExpenseChart', () => {
  let component: PieExpenseChart;
  let fixture: ComponentFixture<PieExpenseChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieExpenseChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieExpenseChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
