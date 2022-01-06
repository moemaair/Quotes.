import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { InfoserviceService } from './service/infoservice.service';


@NgModule({
  declarations: [
    FormComponent,
    QuoteDetailComponent,
    QuoteTextComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  
  ],
  providers: [ InfoserviceService ],
  bootstrap: [FormComponent]
})
export class AppModule { }
