import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {


@Input() author:any;
@Input() name:any;
@Input() quote:any;
@Input() sendBtn(): any{}

quotes: Quotes[] = [
  { author: '', name: '', quote: ''}
]
 
  ngOnInit(){
  }
  constructor(){
   
  }

// Submit button (Send button)

  
  // //variables 
  //  date = new Date();
  //  dateMinute = this.date.getMinutes();
  //  likeCount=0;
  //  unLikeCount=0;

// //click buttons For like and Unlike 
//   likeFunction(): void {
//    this.likeCount = this.likeCount +=1;
//   }
//   unLikeFunction(): void {
//     this.unLikeCount = this.unLikeCount +=1;
//    }
//    removeCard(){
//      alert('Are you sure you want to delete this Quote? ')
//      document.getElementById("quoteCard")?.remove();
//    }
}
