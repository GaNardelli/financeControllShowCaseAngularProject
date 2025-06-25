import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Income } from '../model/income.type';

@Injectable({
  providedIn: 'root'
})
export class ManageIncomeService {  
  http = inject(HttpClient);
  constructor() { }
  getIncomesFromApi(income_id?: number) {
    let url = 'https://sometesteapi.com/income_list';
    if (income_id && income_id > 0) {
      url += `?income_id=`+income_id;
    }
    return this.http.get<Array<Income>>(url);
  }
  deleteIncomeFromApi(income_id: number) {
    let url = 'https://sometesteapi.com/income_ctr?func=deleletedIncome&income_id='+income_id;
    return this.http.delete<Array<Income>>(url);
  }
  addNewIncome(new_income_object: Income) {
    let url = `https://sometesteapi.com/income_ctr?func=addNewdIncome`;
    return this.http.post<Array<Income>>(url , new_income_object);
  }
  updateIncome(update_income: any) {
    let url = `https://sometesteapi.com/income_ctr?func=updatedIncome`;
    return this.http.post<Array<Income>>(url , update_income);
  }
}
