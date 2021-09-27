import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { CountryPipe } from '@country-list/country-pipe/country.pipe';
import { provideMockStore } from '@ngrx/store/testing';

import { CountryListPresentationComponent } from './presentation.component';

describe('CountryListPresentationComponent', () => {
  const initialState = {
    countries: {
      countries: [
        {
          cca3: 'DEU',
          name: {
            common: 'Germany',
            official: 'Germany'
          },
          region: '',
          subregion: '',
          capital: [''],
          area: 89780,
          borders: [''],
          flags: ['']
        }
      ]
    }
  };

  let component: CountryListPresentationComponent;
  let fixture: ComponentFixture<CountryListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [ CountryListPresentationComponent, CountryPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListPresentationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input', () => {
    const data = [
      {
        name: 'germany',
        officialName : 'germany',
        capital: ['Berline'],
        region: 'europe',
        borders: ['FRA'],
        area: 98798,
        flag: 'jhkjh',
        cca3: 'DEU',
      }
    ]
    component.dataSource = new MatTableDataSource(data);

    fixture.detectChanges();

    const nameColumns = fixture.debugElement.queryAll(By.css('td.mat-column-name'));
    expect(nameColumns.length).toEqual(1);
    expect(nameColumns[0].nativeElement.textContent).toEqual('germany');
  });
});
