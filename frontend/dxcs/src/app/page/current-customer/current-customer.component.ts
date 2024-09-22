import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Customer } from '../../entity/customer';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { CustomerComponent } from '../../component/customer/customer.component';
import { CustomerService } from '../../service/customer.service';
import { MatTabsModule } from '@angular/material/tabs';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-customer',
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
    MatTabsModule,
    CommonModule,
    CustomerComponent
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-customer.component.html',
  styleUrl: './current-customer.component.scss'
})
export class CurrentCustomerComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  customers: Customer[] = [];
  displayedColumns: string[] = ['select', 'name', 'companyName', 'requirement', 'mobile', 'followUpUser', 'createdDate', 'followUpDate'];
  selection = new SelectionModel<Customer>(true, []);

  currentIndex: number = 0;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.refreshCustomers();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.customers.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.customers);
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

  edit(customer: Customer): void {
    // const dialogRef = this.dialog.open(CustomerComponent, {
    //   data: { customer: customer },
    //   width: '720px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.refreshCustomers();
    // });
  }

  closeCustomer(): void {
    this.refreshCustomers();
    this.currentIndex = 0;
  }
}
