import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryListRoutingModule } from './country-list-routing.module';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CountryListRoutingModule
  ]
})
export class CountryListModule { }
