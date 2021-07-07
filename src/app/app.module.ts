import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { searchReducer } from './ngrx/reducers/search-reducer';
import { AppEffects } from './ngrx/effects/app.effects';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ search: searchReducer }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ AppEffects ]),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
