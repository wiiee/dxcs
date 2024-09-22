import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  @Input() customer = new Customer('', '', '', '', '', '', '', '', '', '', '', '');
  @Output()
  customerClosed = new EventEmitter<void>();

  constructor(private customerService: CustomerService) {
  }

  onNoClick(): void {
    this.customerClosed.emit();
  }

  save(): void {
    this.customerService.save(this.customer).subscribe(result => {
      console.log("保存成功");
      this.customerClosed.emit()
    });
  }
}
