import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home-component/home-component').then(m => m.HomeComponent)
  },
  {
    path: 'expenses',
    loadComponent: () => import('./manage-expenses-component/manage-expenses-component').then(m => m.ManageExpensesComponent)
  },
  {
    path: 'incomes',
    loadComponent: () => import('./manage-income-component/manage-income-component').then(m => m.ManageIncomeComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./manage-users-component/manage-users-component').then(m => m.ManageUsersComponent)
  }
];
