import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';
import { RegistrationComponent } from './registration/registration.component';
import { VendorComponent } from './vendor.component';

@NgModule({
  declarations: [
    ActiveVendorComponent,
    RegistrationComponent,
    VendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
