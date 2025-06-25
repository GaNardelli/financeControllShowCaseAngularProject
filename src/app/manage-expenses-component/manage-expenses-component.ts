import { Component, inject, NgModule } from '@angular/core';
import { Expense } from '../model/expense.type';
import { ManageExpensesService } from '../services/manage-expenses-service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from '../components/modal/modal';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-manage-expenses-component',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [
     {
       provide: MatDialogRef,
       useValue: {}
     },
     Modal
  ],
  templateUrl: './manage-expenses-component.html',
  styleUrl: './manage-expenses-component.scss'
})
export class ManageExpensesComponent {
  manageExpensesService = inject(ManageExpensesService);
  expensesArray = <Array<Expense>>([]);
  totalExpense: number = 0;
  expense_description: string | undefined;
  expense_value: number | undefined;
  expense_category: string = 'Medicine';
  selectedExpense: any = null;
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {
    // get all the data from the backend using some kind of API
    this.expensesArray = [{
      description: 'medicine',
      value: 15,
      id: 0,
      category: 'Health Care'
    },{
      description: 'supermarket',
      value:150,
      id: 1,
      category: 'Food'
    },{
      description: 'Uber',
      value:5,
      id: 2,
      category: 'Transpot'
    }]
    this.totalExpense = calculateTotalExpenseValue(this.expensesArray);
    this.manageExpensesService.getExpenseFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((expenses) => {
      console.log(expenses);
      // this.expensesArray = expenses;
    });
  }
  deleteFromList(expense_id: number) {
    // i've just implemented this to show on the frontend
    let indexOf = this.expensesArray.findIndex((e) => e.id == expense_id);
    this.expensesArray.splice(indexOf,1);
    this.totalExpense = calculateTotalExpenseValue(this.expensesArray);
    // the request to the api will be like the one below
    this.manageExpensesService.deleteExpenseFromApi(expense_id).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((expenses) => {
      console.log(expenses);
      // this.expensesArray = expenses;
    });
  }
  addNewExpense(form: any) {
    let newDescription = form.controls['expense_description'].value;
    let newCategory = form.controls['expense_category'].value;
    let newValue = form.controls['expense_value'].value;
    let lastId = this.expensesArray[this.expensesArray.length-1];
    let newExpenseObject = {
      'description': newDescription, 'value': newValue, 'category': newCategory,
      id: lastId.id+1.
    };
    this.expensesArray.push(newExpenseObject);
    // the request to the api will be like the one below
    this.manageExpensesService.addNewExpense(newExpenseObject).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((response: any) => {
      console.log(response);
    });
    this.totalExpense = calculateTotalExpenseValue(this.expensesArray);
  }
  openUpdateDialog(expense: any) {
    const dialogRef = this.dialog.open(Modal, {
      width: '300px',
      data: { ...expense } // pass a copy
    });
    console.log(expense);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.expensesArray.findIndex(u => u.id === expense.id);
        if (index !== -1) {
          this.expensesArray[index] = result;
          this.totalExpense = calculateTotalExpenseValue(this.expensesArray);
          // then i would send the updated version to a API
          this.manageExpensesService.updateExpense(result).pipe(
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
}

function calculateTotalExpenseValue(expensesArray: Expense[]): number {
  let total = 0;
  expensesArray.forEach(element => {
    total += element.value * 1;
  });
  return total;
}
