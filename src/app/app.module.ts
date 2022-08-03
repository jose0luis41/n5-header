import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// Import Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatOptionModule} from "@angular/material/core";
import {TranslateLoader, TranslateModule, TranslatePipe} from "@ngx-translate/core";
import {MyTranslate} from "./shared/pipes/translationPipe";
import {FormsModule} from "@angular/forms";
export function createTranslationLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:4203/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    HomeComponent,
    MyTranslate
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslationLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatOptionModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule, TranslateModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

