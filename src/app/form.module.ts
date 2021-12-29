import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    QuoteDetailComponent,
    QuoteTextComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
