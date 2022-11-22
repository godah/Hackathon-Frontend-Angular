import { waitForAsync, TestBed } from '@angular/core/testing';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [CardService],
    }).compileComponents();

    service = TestBed.inject(CardService);
  }));

  it('should test getCompanies', () => {
    const result = service.getCompanies();
    expect(result).toEqual(companiesMock.data);
  });
});
