import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, selectLoader } from '@state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public get loading() {
    return this.store.select(selectLoader);
  }

  constructor(private readonly store: Store<AppState>) { }
}
