import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IBGEResponse } from "src/models/ibge";

@Injectable()
export class IBGEService {
  ibgeUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

  constructor(protected http: HttpClient) { }

  getIBGENoticias(): Observable<IBGEResponse> {

    return this.http.get<IBGEResponse>(`${this.ibgeUrl}?busca=sustentabilidade`)
  }
}
