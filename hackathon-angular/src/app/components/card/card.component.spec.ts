import { Overlay } from '@angular/cdk/overlay';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { ModalOdsComponent } from '../modal-ods/modal-ods.component';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatCardModule, MatDialogModule],
      providers: [MatDialog, Overlay],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.company = companiesMock.data[0];
    fixture.detectChanges();
  }));

  it('should open modal on card click', () => {
    const cardDE = fixture.debugElement.query(By.css('.company-card'));
    const spyMatDialogOpen = spyOn(component['dialog'], 'open');
    cardDE.nativeElement.dispatchEvent(new Event('click'));
    expect(spyMatDialogOpen).toHaveBeenCalled();
    expect(spyMatDialogOpen).toHaveBeenCalledWith(ModalOdsComponent, {
      width: '500px',
      data: {
        companyName: component.company.name,
        goals: component.company.objetivosOds,
      },
    });
  });

  it('should test shareEvent programmatically', () => {
    const event = jasmine.createSpyObj('event', ['stopPropagation']);
    component.shareEvent(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should test likeEvent programmatically', () => {
    const event = jasmine.createSpyObj('event', ['stopPropagation']);
    component.likeEvent(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
