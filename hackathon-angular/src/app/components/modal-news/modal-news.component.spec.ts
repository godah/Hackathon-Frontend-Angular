import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { NewsIbgeService } from 'src/app/services/news-ibge.service';
import { ModalNewsComponent } from './modal-news.component';
import { NewsMock } from 'src/mocks/NewsMock';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardNewsComponent } from './card-news/card-news.component';
import { CustomModalComponent } from 'src/app/shared/components/custom-modal/custom-modal.component';

describe('ModalNewsComponent', () => {
  let component: ModalNewsComponent;
  let fixture: ComponentFixture<ModalNewsComponent>;
  let newsIbgeService: NewsIbgeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalNewsComponent,
        CustomModalComponent,
        CardNewsComponent,
      ],
      imports: [MatPaginatorModule, MatProgressSpinnerModule],
      providers: [
        {
          provide: NewsIbgeService,
          useValue: {
            getNews: () => of(NewsMock),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNewsComponent);
    component = fixture.componentInstance;
    newsIbgeService = TestBed.inject(NewsIbgeService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should test getNews', () => {
    it('should test success case', fakeAsync(() => {
      spyOn(newsIbgeService, 'getNews').and.callThrough();
      component.getNews();
      fixture.detectChanges();
      component['newsIbgeService'].getNews().subscribe({
        next: (resp) => {
          expect(newsIbgeService.getNews).toHaveBeenCalled();
          expect(resp).toEqual(NewsMock);
        },
      });
      flush();
    }));
  });

  it('should test ngOnInit', () => {
    const spyOnDestroy = spyOn(component['dataSource'], 'disconnect');
    component.ngOnDestroy();
    expect(spyOnDestroy).toHaveBeenCalled();
  });
});
