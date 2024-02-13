import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ArticleComponent } from './components/article/article.component';
import { FormComponent } from './components/form/form.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleChartsModule } from 'angular-google-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BourseDisplayComponent } from './components/bourse-display/bourse-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    ArticleComponent,
    FormComponent,
    BourseDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
      RouterOutlet,
      CanvasJSAngularChartsModule
  ],
  providers: [
    provideClientHydration()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
