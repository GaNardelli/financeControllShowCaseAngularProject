import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Expense } from '../model/expense.type';

@Injectable({
  providedIn: 'root'
})
export class ManageExpensesService {
  http = inject(HttpClient);
  getExpenseFromApi(expense_id?: number) {
    let url = 'https://sometesteapi.com/expense_list';
    if (expense_id && expense_id > 0) {
      url += `?expense_id=`+expense_id;
    }
    return this.http.get<Array<Expense>>(url);
  }
  deleteExpenseFromApi(expense_id: number) {
    let url = 'https://sometesteapi.com/expense_ctr?func=deleleteExpense&expense_id='+expense_id;
    return this.http.delete<Array<Expense>>(url);
  }
  addNewExpense(new_expense_object: { description: any; value: any; category: any; id: number; }) {
    let url = `https://sometesteapi.com/expense_ctr?func=addNewExpense`;
    return this.http.post<Array<Expense>>(url , new_expense_object);
  }
  updateExpense(update_expense: any) {
    let url = `https://sometesteapi.com/expense_ctr?func=updateExpense`;
    return this.http.post<Array<Expense>>(url , update_expense);
  }
}
