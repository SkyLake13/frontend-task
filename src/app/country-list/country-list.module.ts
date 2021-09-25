import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


import { CountryListRoutingModule } from './country-list-routing.module';
import { CountryListContainerComponent } from './components/country-list-container/container.component';
import { CountryListPresentationComponent } from './components/country-list-presentation/presentation.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatTableModule,
  MatInputModule,
  MatSortModule
]

@NgModule({
  declarations: [
    CountryListContainerComponent,
    CountryListPresentationComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    CountryListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ]
})
export class CountryListModule { }
