import { Injectable } from '@angular/core';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { odsMock } from 'src/mocks/OdsMock';
import { Company } from 'src/models/company';


import { Ods } from 'src/models/ods';

@Injectable()
export class CompanyService {
  companiesUrl = 'http://localhost:9999/api/companies';

  constructor() { }

  getCompanies(): Company[] {
    let response: Company[] = [];
    Object.assign(response, companiesMock.data);
    return response;
  }
  getSearchCompanies(name: string): Company[] {
    let response: Company[] = [];
    Object.assign(response, companiesMock.data);
    return response.filter(item => item.name.toLocaleLowerCase() == name.toLocaleLowerCase() || item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

  getOds(): Ods[] {
    let response: Ods[] = [];
    Object.assign(response, odsMock.data);
    return response;
  }

}
