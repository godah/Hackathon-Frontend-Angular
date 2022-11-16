import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {
  @Input() companies: Company[] = [{
    id: 0,
    name: '',
    img: '',
    people: '',
    objetivosOds: [],
  }];

  filterText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
