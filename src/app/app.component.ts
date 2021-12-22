import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'QuoteApp';
  bgcolor = '';
  headingColor=''
  far =''



  modeToogle(){
    this.bgcolor ='#15202B'
    this.headingColor ='white'
    this.far ='black'


  }
}
