import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/models/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Noticia = { id: 0, titulo: "", data_publicacao: "", introducao: "", link:"" };
  constructor() { }

  ngOnInit(): void {    
  }
}
