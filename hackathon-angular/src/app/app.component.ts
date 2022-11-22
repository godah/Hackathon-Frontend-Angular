import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';
import { Company } from 'src/models/company';
import { ModalNoticiaComponent } from './modal-noticia/modal-noticia.component';
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

  filtroFormGroup: FormGroup;  
  
  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.companies = this.getCompanies();

    this.filtroFormGroup = this.formBuilder.group({
      filtroControl: ''      
    });  
    this.filtraEmpresas();
  }

  getCompanies(): Company[]{
    return this.cardService.getCompanies();
  } 

  filtraEmpresas(): void {    
    this.filtroFormGroup.get('filtroControl').valueChanges
    .pipe(debounceTime(400))
    .subscribe((value: string) => {      
      this.exibeEmpresas(value);
    });
  }

  exibeEmpresas(filtro: string): void {
    this.companies = this.getCompanies().filter(
      function(company:Company) {  
        return company.name.toLowerCase().includes(filtro.toLowerCase());  
    });
  }

  abrirModal(): void{
    this.dialog.open(ModalNoticiaComponent);
  }
}
