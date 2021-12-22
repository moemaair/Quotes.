import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuoteTextComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
