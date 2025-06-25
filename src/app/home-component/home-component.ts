import { Component, OnInit } from '@angular/core';
import { Income } from '../model/income.type';
import { Expense } from '../model/expense.type';
import { PieExpenseChart } from "../components/pie-expense-chart/pie-expense-chart";
import { ColumnIncomeExpenseComponent } from "../components/column-income-expense-component/column-income-expense-component";

@Component({
  selector: 'app-home-component',
  imports: [PieExpenseChart, ColumnIncomeExpenseComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {
  incomeArray = <Array<Income>>([]);
  expensesArray = <Array<Expense>>([]);
  totalExpense: number = 0;
  totalBudget: number = 0;
  ngOnInit(): void {
    // get all the data from the backend using the routes presented on manage-income and manage-expense service to create this array to not duplicate code.
    this.incomeArray = [{
      description: 'Salary',
      value: 3000,
      id: 0
    },{
      description: 'Bonus',
      value: 400,
      id: 1
    }];

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
      category: 'Transport'
    }]

    this.totalBudget = calculateTotalBudgetValue(this.incomeArray);
    this.totalExpense = caculateTotalExpenseValue(this.expensesArray);
  }
}

function caculateTotalExpenseValue(expensesArray: Expense[]): any {
  let total = 0;
  expensesArray.forEach(element => {
    total += element.value;
  });
  return total;
}

function calculateTotalBudgetValue(incomeArray: Income[]): any {
  let total = 0;
  incomeArray.forEach(element => {
    total += element.value;
  });
  return total;
}

