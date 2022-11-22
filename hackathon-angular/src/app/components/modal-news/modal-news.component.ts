import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NewsIbgeService } from 'src/app/services/news-ibge.service';
import { News } from 'src/models/news';

@Component({
  selector: 'app-modal-news',
  templateUrl: './modal-news.component.html',
  styleUrls: ['./modal-news.component.scss'],
})
export class ModalNewsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  news$: Observable<News[]>;

  constructor(
    private newsIbgeService: NewsIbgeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNews();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  getNews() {
    this.newsIbgeService.getNews().subscribe({
      next: (data: News[]) => {
        this.cdr.detectChanges();
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.news$ = this.dataSource.connect();
      },
    });
  }
}
