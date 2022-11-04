import { trigger } from '@angular/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardService } from './services/card.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        HighlightCardComponent,
        InputFilterComponent,
        CardComponent,
        FooterComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        ReactiveFormsModule,
      ],
      providers: [
        FormBuilder,
        {
          provide: CardService,
          useValue: {
            getCompanies: () => companiesMock.data,
          },
        },
      ],
    })
      .overrideComponent(AppComponent, {
        set: {
          animations: [trigger('listAnimation', [])],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should test ngOnInit', () => {
    const spyBuildForm = spyOn(component as any, 'buildForm');
    const spyGetCompanies = spyOn(component as any, 'getCompanies');
    component.ngOnInit();
    expect(spyBuildForm).toHaveBeenCalled();
    expect(spyGetCompanies).toHaveBeenCalled();
  });

  it('should test buildForm', () => {
    expect(component.searchForm).toBeUndefined();
    component['buildForm']();
    expect(component.searchForm).not.toBeUndefined();
  });

  it('should test getCompanies', () => {
    expect(component.filteredCompanies).toBeUndefined();
    component['getCompanies']();
    expect(component.filteredCompanies).toEqual(companiesMock.data);
  });

  describe('should test getCompaniesByName', () => {
    it('should return an array with 9 items', () => {
      const result = component.getCompaniesArray('');
      expect(result.length).toBe(9);
    });

    it('should return an array with 1 item', () => {
      const result = component.getCompaniesArray('aw');
      expect(result.length).toBe(1);
    });

    it('should return an empty array', () => {
      const result = component.getCompaniesArray('test');
      expect(result.length).toBe(0);
    });
  });

  it('should test getCompaniesByName', () => {
    const spyGetCompaniesArray = spyOn(component, 'getCompaniesArray');
    const event = {
      target: {
        value: 'aw',
      } as Partial<HTMLInputElement>,
    } as Event;
    component.getCompaniesByName(event);
    expect(spyGetCompaniesArray).toHaveBeenCalled();
  });
});
