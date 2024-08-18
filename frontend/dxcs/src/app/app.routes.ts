import { Routes } from '@angular/router';
import { MyCustomerComponent } from './page/my-customer/my-customer.component';
import { CurrentCustomerComponent } from './page/current-customer/current-customer.component';

export const routes: Routes = [
    { path: 'my-customer', component: MyCustomerComponent },
    { path: 'current-customer', component: CurrentCustomerComponent },
    { path: '',   redirectTo: '/current-customer', pathMatch: 'full' }
];

