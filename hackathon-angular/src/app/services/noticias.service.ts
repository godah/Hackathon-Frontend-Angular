import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from 'src/models/noticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  urlIbgeApi = 'http://servicodados.ibge.gov.br/api/v3/noticias/?busca=sustentabilidade';

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<{items: Noticias[]}>{
    return this.http.get<{items: Noticias[]}>(this.urlIbgeApi);
  }
}
