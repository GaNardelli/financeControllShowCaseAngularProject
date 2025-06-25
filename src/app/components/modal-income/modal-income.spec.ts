import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncome } from './modal-income';

describe('ModalIncome', () => {
  let component: ModalIncome;
  let fixture: ComponentFixture<ModalIncome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIncome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIncome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
