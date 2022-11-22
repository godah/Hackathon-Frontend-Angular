import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsMock } from 'src/mocks/NewsMock';
import { CardNewsComponent } from './card-news.component';

describe('CardNewsComponent', () => {
  let component: CardNewsComponent;
  let fixture: ComponentFixture<CardNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardNewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNewsComponent);
    component = fixture.componentInstance;
    component.news = NewsMock.items[0];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
