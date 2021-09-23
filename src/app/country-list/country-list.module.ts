import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { CountryListRoutingModule } from './country-list-routing.module';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { ListService } from './service/list.service';

const MATERIAL_MODULES = [
  MatTableModule
]

@NgModule({
  declarations: [
    ListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CountryListRoutingModule,
    ...MATERIAL_MODULES
  ],
  providers: [ListService]
})
export class CountryListModule { }
