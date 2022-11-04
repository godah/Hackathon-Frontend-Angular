import { waitForAsync, TestBed } from '@angular/core/testing';
import { NewsIbgeService } from './news-ibge.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NewsMock } from 'src/mocks/NewsMock';
import { APIS } from 'src/environments/environment';

describe('NewsIbgeService', () => {
  let httpTestingController: HttpTestingController;
  let service: NewsIbgeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsIbgeService],
    }).compileComponents();

    service = TestBed.inject(NewsIbgeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  it('should call getNews', () => {
    service.getNews().subscribe({
      next: (resp) => {
        expect(resp).toEqual([
          {
            ...NewsMock.items[0],
            data_publicacao: new Date(NewsMock.items[0].data_publicacao),
          },
        ]);
      },
    });
    const req = httpTestingController.expectOne(APIS.ibge);
    expect(req.request.method).toBe('GET');
    req.flush(NewsMock);
    httpTestingController.verify();
  });
});
