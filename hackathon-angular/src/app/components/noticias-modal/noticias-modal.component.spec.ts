import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasModalComponent } from './noticias-modal.component';

describe('NoticiasModalComponent', () => {
  let component: NoticiasModalComponent;
  let fixture: ComponentFixture<NoticiasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
