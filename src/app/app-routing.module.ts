import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./country-list/country-list.module').then((m) => m.CountryListModule) },
  { path: ':code', loadChildren: () => import('./country-detail/country-detail.module').then((m) => m.CountryDetailModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
