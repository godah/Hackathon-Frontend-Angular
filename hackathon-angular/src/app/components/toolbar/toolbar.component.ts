import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalNewsComponent } from '../modal-news/modal-news.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private dialog: MatDialog) {}

  openNewsModal() {
    this.dialog.open(ModalNewsComponent, {
      width: '780px',
    });
  }
}
