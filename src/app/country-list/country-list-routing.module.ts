import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListContainerComponent } from './components/country-list-container/container.component';

const routes: Routes = [
  { path: '', component: CountryListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryListRoutingModule { }
