import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  constructor(
    private readonly location: Location,
    public  readonly route: ActivatedRoute
  ) { }

  public goBack() {
    this.location.back();
  }
}
