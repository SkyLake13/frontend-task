import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COUNTRIES_ROUTE } from 'src/app/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public countries_route = COUNTRIES_ROUTE;
}
