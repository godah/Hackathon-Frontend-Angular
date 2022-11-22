import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from 'src/models/company';
import { CardService } from './services/card.service';
import { listAnimation } from './shared/animations/list.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [listAnimation],
})
export class AppComponent {
  title = 'hackathon-angular';
  filteredCompanies: Company[];
  searchForm: FormGroup;

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getCompanies();
  }

  private buildForm() {
    this.searchForm = this.formBuilder.group({
      companyName: [null],
    });
  }

  private getCompanies(): void {
    this.filteredCompanies = this.cardService.getCompanies();
  }

  getCompaniesByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredCompanies = this.getCompaniesArray(filterValue);
  }

  getCompaniesArray(filterValue: string): Company[] {
    return this.cardService
      .getCompanies()
      .filter((company) =>
        company.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
  }
}
