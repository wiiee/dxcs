import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerComponent } from '../../component/customer/customer.component';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatChipsModule,
    MatTabsModule
  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  customers: Customer[] = [];
  displayedColumns: string[] = ['checkbox', 'name', 'companyName', 'requirement', 'mobile', 'followUpUser', 'createdDate', 'followUpDate'];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.refreshCustomers();
  }

  refreshCustomers(): void {
    this.customerService.getAll().subscribe(customers =>
      this.customers = customers
    );
  }

  addCustomer(): void {
    const dialogRef = this.dialog.open(CustomerComponent, { width: '720px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshCustomers();
    });
  }
}
