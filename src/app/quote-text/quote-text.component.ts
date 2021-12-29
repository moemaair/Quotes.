import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  @Input() quote:any;
  
  constructor() { }

  ngOnInit(): void {
  }

 

}
