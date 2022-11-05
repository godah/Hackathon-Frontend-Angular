import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticiaComponent } from './noticia/noticia.component';
import { ModalNoticiaComponent } from './modal-noticia/modal-noticia.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NoticiaComponent,
    ModalNoticiaComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [CardService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
