import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HowToInstallComponent } from './how-to-install/how-to-install.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationCalculatorComponent } from './application-calculator/application-calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    HowItWorksComponent,
    HowToInstallComponent,
    ContactComponent,
    ApplicationCalculatorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    ApplicationCalculatorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
