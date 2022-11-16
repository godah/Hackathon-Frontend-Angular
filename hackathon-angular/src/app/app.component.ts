import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/models/company';
import { NoticiasModalComponent } from './components/noticias-modal/noticias-modal.component';
import { CardService } from './services/card.service';
import { NoticiasService } from './services/noticias.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon-angular';
  companies: Company[] = [];

  constructor(private cardService: CardService, private noticiasService: NoticiasService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void{
    this.companies = this.cardService.getCompanies();
    console.log(this.companies);
  }

  getModalNoticias(): void{
    this.noticiasService.getNoticias().subscribe(values => {
      this.dialog.open(NoticiasModalComponent, {
        data: {noticias: values.items}
      });
    });

  }
}
