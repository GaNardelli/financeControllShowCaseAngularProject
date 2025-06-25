import { Component, inject, NgModule, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ManageIncomeService} from '../services/manage-income-service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Income } from '../model/income.type';
import { ModalIncome } from '../components/modal-income/modal-income';

@Component({
  selector: 'app-manage-income-component',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './manage-income-component.html',
  styleUrl: './manage-income-component.scss'
})
export class ManageIncomeComponent {
  manageIncomeService = inject(ManageIncomeService);
  incomesArray = <Array<Income>>([]);
  totalBudget: number = 0;
  income_description: string | undefined;
  income_value: number | undefined;
  income_category: string = 'Medicine';
  selectedIncome: any = null;
  constructor(private dialog: MatDialog){}
  ngOnInit() : void {
    this.incomesArray = [{
      description: 'Salary',
      value: 3000,
      id: 0
    },{
      description: 'Bonus',
      value: 400,
      id: 1
    }];
    this.totalBudget = calculateTotalIncomeValue(this.incomesArray);
    this.manageIncomeService.getIncomesFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((incomes: any) => {
      console.log(incomes);
      this.incomesArray = incomes;
    })
  }
  addNewIncome(form: NgForm) {
    let newDescription = form.controls['income_description'].value;
    let newValue = form.controls['income_value'].value;
    let lastId = this.incomesArray[this.incomesArray.length-1];
    let newIncomeObject = {
      'description': newDescription, 
      'value': newValue,
      id: lastId.id+1.
    };
    this.incomesArray.push(newIncomeObject);
    // the request to the api will be like the one below
    this.manageIncomeService.addNewIncome(newIncomeObject).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((response: any) => {
      console.log(response);
    });
    this.totalBudget = calculateTotalIncomeValue(this.incomesArray);
  }
  openUpdateDialog(income: Income) {
    const dialogRef = this.dialog.open(ModalIncome, {
      width: '300px',
      data: { ...income } // pass a copy
    });
    console.log(income);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.incomesArray.findIndex(u => u.id === income.id);
        if (index !== -1) {
          this.incomesArray[index] = result;
          this.totalBudget = calculateTotalIncomeValue(this.incomesArray);
          // then i would send the updated version to a API
          this.manageIncomeService.updateIncome(result).pipe(
            catchError((err) => {
              console.log(err);
              throw err;
            })
          ).subscribe((response: any) => {
            console.log(response);
          });
        }
      }
    });
  }
  deleteFromList(income_id: number) {
    let indexOf = this.incomesArray.findIndex((i) => i.id == income_id);
    this.incomesArray.splice(indexOf,1);
    this.manageIncomeService.deleteIncomeFromApi(income_id).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((incomes) => {
      console.log(incomes);
      // this.incomesArray = incomes;
    });
    this.totalBudget = calculateTotalIncomeValue(this.incomesArray);
  }
}

function calculateTotalIncomeValue (incomesArray: Income[]) : number {
  let total =  0;
  incomesArray.forEach(element => {
    total += element.value * 1;
  });
  return total;
} 
