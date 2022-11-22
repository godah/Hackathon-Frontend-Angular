import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIBGEComponent } from './modal-ibge.component';

describe('ModalIBGEComponent', () => {
  let component: ModalIBGEComponent;
  let fixture: ComponentFixture<ModalIBGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIBGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIBGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
