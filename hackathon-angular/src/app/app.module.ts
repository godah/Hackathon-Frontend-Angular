import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { OdsModalComponent } from './components/ods-modal/ods-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { FormsModule } from '@angular/forms';
import { FilterCompaniesPipePipe } from './pipes/filter-companies-pipe.pipe';
import { NoticiasModalComponent } from './components/noticias-modal/noticias-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    OdsModalComponent,
    CardGroupComponent,
    FilterCompaniesPipePipe,
    NoticiasModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [CardService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
