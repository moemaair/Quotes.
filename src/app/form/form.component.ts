import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuoteTextComponent } from '../quote-text/quote-text.component';
import { Quotes } from '../quotes';

  
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


//variable definations 

  public author =''
  public name =''
  public quote =''

// // Array of object from quotes.ts;
quotes: Quotes[] = [
  { 
     author: 'John cena',
     name: 'mohamed ibrahim', 
     quote: 'life is good!'
  }
]


// Submit button (Send button)
  sendBtn(){
    let newQuote = {
      quote : this.quote,
      author : this.author,
      name : this.name
    }
    this.quotes.push(newQuote)

    // clear the input fields for another quote
    this.quote = '';
    this.author = '';
    this.name = '';
  
  }
  
 

  

  
}
