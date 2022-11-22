import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/models/company';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() company: Company = { id: 0, name: "", img: "", people: "", objetivosOds: [] };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }




  openModal() {
    console.table(this.company)
    this.dialog.open(ModalComponent, {
      width: '30%',
      data: this.company
    });
  }

}
