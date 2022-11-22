import { Injectable } from '@angular/core';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { Company } from 'src/models/company';

@Injectable()
export class CardService {
  companiesUrl = 'http://localhost:9999/api/companies';

  constructor() {}

  getCompanies(): Company[] {
    let response: Company[] = [];
    Object.assign(response, companiesMock.data);
    return response;
  }
}
