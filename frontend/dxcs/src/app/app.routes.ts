import { Routes } from '@angular/router';
import { MyCustomerComponent } from './page/my-customer/my-customer.component';
import { CurrentCustomerComponent } from './page/current-customer/current-customer.component';
import { PublicCustomerComponent } from './page/public-customer/public-customer.component';
import { WorkbenchComponent } from './page/workbench/workbench.component';
import { TaxComponent } from './page/tax/tax.component';
import { MaintenanceComponent } from './page/maintenance/maintenance.component';
import { AccountantComponent } from './page/accountant/accountant.component';

export const routes: Routes = [
    { path: 'my-customer', component: MyCustomerComponent },
    { path: 'current-customer', component: CurrentCustomerComponent },
    { path: 'public-customer', component: PublicCustomerComponent },
    { path: 'workbench', component: WorkbenchComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'accountant', component: AccountantComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '',   redirectTo: '/current-customer', pathMatch: 'full' }
];

