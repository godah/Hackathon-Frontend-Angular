import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/models/company';
import { ModalIBGEComponent } from './components/modal-ibge/modal-ibge.component';
import { CompanyService } from './services/company.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon-angular';
  companies: Company[] = [];

  constructor(private CompanyService: CompanyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companies = this.CompanyService.getCompanies();
  }
  searchCompanies(name: string) {

    this.companies = this.CompanyService.getSearchCompanies(name);
  }

  OnchangeSearchCompany(event: KeyboardEvent) {
    const inputElement = <HTMLInputElement>event.target;

    if (inputElement.value.trim() === "") {
      event.stopImmediatePropagation();
      this.getCompanies();
      return
    }
    if (event.code == 'Space') {
      event.stopImmediatePropagation();
      return
    }
    this.searchCompanies(inputElement.value);
  }
  openIBGENews(event: Event) {
    this.dialog.open(ModalIBGEComponent, {
      width: "100%",
      height: "90%"
    })
  }
}
