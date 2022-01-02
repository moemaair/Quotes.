import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from '../form/form.component'
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';
@Component({
  selector: 'quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  @Input() quote:any;
  
  constructor() { }

  ngOnInit(): void {
  }

 

}
