import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ]
})
export class CountryDetailModule { }
