import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { DetailService } from './service/detail.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ],
  providers: [DetailService]
})
export class CountryDetailModule { }
