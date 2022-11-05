import { Component } from '@angular/core';
import { Company } from 'src/models/company';
import { CardService } from './services/card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon-angular';
  companies: Company[] = [];
  exibirObjetivosOD: boolean = false;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void{
    this.companies = this.cardService.getCompanies();
  } 
}
