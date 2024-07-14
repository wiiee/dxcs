import { Routes } from '@angular/router';
import { TaxComponent } from './page/tax/tax.component';
import { SaleComponent } from './page/sale/sale.component';
import { AccountantComponent } from './page/accountant/accountant.component';
import { CompanyComponent } from './page/company/company.component';
import { CustomerComponent } from './page/customer/customer.component';

export const routes: Routes = [
    { path: 'sale', component: SaleComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'accountant', component: AccountantComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'customer', component: CustomerComponent },
    { path: '',   redirectTo: '/sale', pathMatch: 'full' },
];
