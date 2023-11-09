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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


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
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'}),
    ToastrModule.forRoot({
      timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    }),
  ],
  providers: [
    ListToString
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
