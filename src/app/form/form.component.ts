import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

  
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  schoolName ='Jomo kenyatta University';
  
  
  
  
  /*CODE NOT NEEDED ANYMORE */

//Boiler plate
  // public formVar = 'mohamed';

  public author =''
  public name =''
  public quote =''

// // Array of object from quotes.ts
quotes: Quotes[] = [
  {
    author: '',
    name: '',
    quote: ''

  }
]


// Submit button (Send button)
  sendBtn(){
    let quote = {
      author:this.author,
      name:this.name,
      quote:this.quote
    }
    this.quotes.push(quote);  
  }


  

  
}
