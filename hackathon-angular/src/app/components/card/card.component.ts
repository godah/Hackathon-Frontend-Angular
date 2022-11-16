import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/models/company';
import { OdsModalComponent } from '../ods-modal/ods-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() company: Company = {
    id: 0,
    name: '',
    img: '',
    people: '',
    objetivosOds: [],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openOdsModal(): void {
    this.dialog.open(OdsModalComponent, {
      data: {objetivosOds: this.company.objetivosOds}
    });
  }
}
