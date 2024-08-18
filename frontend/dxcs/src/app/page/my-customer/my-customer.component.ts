import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-customer',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './my-customer.component.html',
  styleUrl: './my-customer.component.scss'
})
export class MyCustomerComponent {

}
