import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Income } from '../model/income.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageIncomeService {  
  http = inject(HttpClient);
  constructor() { }
  baseUrl = `${environment.apiUrl}`;
  getIncomesFromApi(income_id?: number) {
    let url = `${this.baseUrl}/income_list`;
    if (income_id && income_id > 0) {
      url += `?income_id=`+income_id;
    }
    return this.http.get<Array<Income>>(url);
  }
  deleteIncomeFromApi(income_id: number) {
    let url = `${this.baseUrl}/deleletedIncome?income_id=`+income_id;
    return this.http.delete<Array<Income>>(url);
  }
  addNewIncome(new_income_object: Income) {
    let url = `${this.baseUrl}/addNewdIncome`;
    return this.http.post<Array<Income>>(url , new_income_object);
  }
  updateIncome(update_income: any) {
    let url = `${this.baseUrl}/updatedIncome`;
    return this.http.post<Array<Income>>(url , update_income);
  }
}
