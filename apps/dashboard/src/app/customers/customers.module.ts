import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersComponent],
  exports: [CustomersComponent]
})
export class CustomersModule { }
