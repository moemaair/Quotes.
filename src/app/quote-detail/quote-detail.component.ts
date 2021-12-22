import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public jina = 'mohamed';
  
  public author =''
  public name =''
  public quote =''

  


  date = new Date();
  dateMinute = this.date.getMinutes();
  likeCount=0;
   unLikeCount=0;


  likeFunction(): void {
   this.likeCount = this.likeCount + 1;
  }

  unLikeFunction(): void {
    this.unLikeCount = this.unLikeCount + 1;
   }
   sendBtn(){
     this.author;
     this.name;
     this.quote;
   }

  


}
