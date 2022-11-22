import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsModalComponent } from './ods-modal.component';

describe('OdsModalComponent', () => {
  let component: OdsModalComponent;
  let fixture: ComponentFixture<OdsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
