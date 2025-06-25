import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home-component/home-component').then((m) => m.HomeComponent)
        }
    },
    {
        path: 'expenses',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./manage-expenses-component/manage-expenses-component').then((m) => m.ManageExpensesComponent)
        }
    },
    {
        path: 'incomes',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./manage-income-component/manage-income-component').then((m) => m.ManageIncomeComponent)
        }
    },
    {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./manage-users-component/manage-users-component').then((m) => m.ManageUsersComponent)
        }
    }
];
