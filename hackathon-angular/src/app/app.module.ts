import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { AppRoutingModule } from './app-routing.module';

import { CardService } from './services/card.service';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { ModalOdsComponent } from './components/modal-ods/modal-ods.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { NewsIbgeService } from './services/news-ibge.service';
import { ModalNewsComponent } from './components/modal-news/modal-news.component';
import { CardNewsComponent } from './components/modal-news/card-news/card-news.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPtBrPaginatorIntl } from './helpers/pt-br-paginator-intl';
import { environment } from 'src/environments/environment';

registerLocaleData(localePt, 'pt-BR');

const COMPONENTS = [
  ToolbarComponent,
  HighlightCardComponent,
  CardComponent,
  FooterComponent,
  InputFilterComponent,
  ModalOdsComponent,
  ModalNewsComponent,
  CardNewsComponent,
];

@NgModule({
  declarations: [AppComponent, COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    CardService,
    NewsIbgeService,
    HttpErrorHandler,
    { provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() },
    { provide: LOCALE_ID, useValue: environment.language },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
