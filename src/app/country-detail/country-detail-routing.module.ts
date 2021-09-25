import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailContainerComponent } from './components/country-detail-container/container.component';

const routes: Routes = [
  { path: '', component: CountryDetailContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailRoutingModule { }
