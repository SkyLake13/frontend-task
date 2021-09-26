import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPipe } from './country.pipe';

@NgModule({
  declarations: [
    CountryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CountryPipe]
})
export class SharedModule { }
