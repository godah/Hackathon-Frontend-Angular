import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Noticias } from 'src/models/noticias';

@Component({
  selector: 'app-noticias-modal',
  templateUrl: './noticias-modal.component.html',
  styleUrls: ['./noticias-modal.component.css']
})
export class NoticiasModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {noticias: Noticias[]}) { }

  ngOnInit(): void {
  }

}
