import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ods } from 'src/models/ods';

@Component({
  selector: 'app-ods-modal',
  templateUrl: './ods-modal.component.html',
  styleUrls: ['./ods-modal.component.css']
})
export class OdsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {objetivosOds: Ods[]}) {}

  ngOnInit(): void {

  }

}
