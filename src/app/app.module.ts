import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './pages/management/management.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { ListToString } from './pipes';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';


@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    CocktailsComponent,
    ListToString,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapMultiselectModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'}),
  ],
  providers: [
    ListToString
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
