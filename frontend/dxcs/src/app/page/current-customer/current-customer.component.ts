import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
    MatCheckboxModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-customer.component.html',
  styleUrl: './current-customer.component.scss'
})
export class CurrentCustomerComponent {
  readonly dialog = inject(MatDialog);
  customers: Customer[] = [
    new Customer('1', '张先生', '深圳市科技有限公司', '130', '123', '333', '***', '***', '***', '2024-09-01', '2024-09-02', '222'),
    new Customer('2', '郑总', '深圳市科技有限公司', '130', '123', '333', '***', '***', '***', '2024-09-01', '2024-09-02', '222'),
  ];
  displayedColumns: string[] = ['checkbox', 'name', 'companyName', 'requirement', 'mobile', 'followUpUser', 'createdDate', 'followUpDate'];

  addCustomer(): void {
    const dialogRef = this.dialog.open(CustomerComponent, {width:'720px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
