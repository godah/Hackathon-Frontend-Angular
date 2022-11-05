import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Noticia } from 'src/models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-modal-noticia',
  templateUrl: './modal-noticia.component.html',
  styleUrls: ['./modal-noticia.component.css']
})
export class ModalNoticiaComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(
    public dialog: MatDialog,
    private _noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.getNoticias();    
  }

  getNoticias(): void {
    this.noticias = this._noticiasService.getNoticias();    
  }
}
