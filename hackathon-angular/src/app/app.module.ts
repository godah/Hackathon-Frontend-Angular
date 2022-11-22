import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.service';
import { HttpErrorHandler } from './core/http-error-handler.service';
import { SharedModule } from 'src/shared/shared.module';
import { ModalComponent } from './components/modal/modal.component';
import { IBGEService } from './services/ibge.service';
import { ModalIBGEComponent } from './components/modal-ibge/modal-ibge.component';
import { PipesModule } from './pipe/pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent,
    ModalIBGEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    PipesModule
  ],
  providers: [CompanyService, HttpErrorHandler, IBGEService],
  bootstrap: [AppComponent]
})
export class AppModule { }
