import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIS } from 'src/environments/environment';
import { News } from 'src/models/news';

@Injectable()
export class NewsIbgeService {
  constructor(private http: HttpClient) {}

  public getNews(): Observable<any> {
    return this.http.get<any>(APIS.ibge).pipe(
      map(({ items }) => {
        return items.map((item: News) => {
          const dt = item.data_publicacao;
          const [date, hour] = dt.split(' ');
          const [dd, mm, yy] = date.split('/');
          const dateFormatted = `${yy}-${mm}-${dd} ${hour}`;

          return {
            id: item.id,
            titulo: item.titulo,
            introducao: item.introducao,
            data_publicacao: new Date(dateFormatted),
            link: item.link,
          };
        });
      })
    );
  }
}
