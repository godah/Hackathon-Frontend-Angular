import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiasUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/?busca=sustentabilidade';

  constructor(private _http: HttpClient) { }

  getNoticias(): Noticia[] {     
    let response: Noticia[] = [];
    
    this._http
      .get<any>(this.noticiasUrl)
      .subscribe(data => {        
        Object.assign(response, data.items);        
      });

      console.log(response);
    return response;
  }  
}
