import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { Quotes } from '../quotes';
import { InfoserviceService } from '../service/infoservice.service';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor(public infoserviceService:InfoserviceService){
   
  }
@Input() author:any;
@Input() name:any;
@Input() quote:any;
@Input () quotes!:Quotes;

 
  ngOnInit(){
  }
 
  public likeCount=0;
  public unLikeCount=0;


  
 

//click buttons For like and Unlike 
  like(): void {
   this.likeCount +=1;
  }
  unlike(): void {
    this.unLikeCount +=1;
   }
   removeCard(){
     alert('Are you sure you want to delete this Quote? ')
     document.getElementById("quoteCard")?.remove();
   }
}
