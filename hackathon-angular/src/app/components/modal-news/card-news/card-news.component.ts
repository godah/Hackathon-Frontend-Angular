import { Component, Input } from '@angular/core';
import { News } from 'src/models/news';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent {
  @Input() news: News;
}
