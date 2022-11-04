import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomModalComponent } from 'src/app/shared/components/custom-modal/custom-modal.component';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { ModalOdsComponent } from './modal-ods.component';

const dialog = {
  data: {
    goals: companiesMock.data[0].objetivosOds,
    companyName: companiesMock.data[0].name,
  },
};

describe('ModalOdsComponent', () => {
  let component: ModalOdsComponent;
  let fixture: ComponentFixture<ModalOdsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOdsComponent, CustomModalComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: dialog,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
