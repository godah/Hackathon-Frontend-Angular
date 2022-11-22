import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/models/company';
import { ModalOdsComponent } from '../modal-ods/modal-ods.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() company: Company = {
    id: 0,
    name: '',
    img: '',
    people: '',
    objetivosOds: [],
  };

  constructor(private dialog: MatDialog) {}

  openCardDetails(name: string, goals: any[]) {
    this.dialog.open(ModalOdsComponent, {
      width: '500px',
      data: { companyName: name, goals },
    });
  }

  shareEvent(event: MouseEvent) {
    console.log('share');
    event.stopPropagation();
  }

  likeEvent(event: MouseEvent) {
    console.log('like');
    event.stopPropagation();
  }
}
