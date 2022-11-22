import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ods',
  templateUrl: './modal-ods.component.html',
  styleUrls: ['./modal-ods.component.scss'],
})
export class ModalOdsComponent {
  goals: any[];
  companyName: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.goals = data.goals;
    this.companyName = data.companyName;
  }
}
