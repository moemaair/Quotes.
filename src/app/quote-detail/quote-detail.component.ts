import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {


@Input() author:any;
@Input() name:any;
@Input() quote:any;




  
  ngOnInit(): void {
  }
  constructor(){}


  
  //variables 
   date = new Date();
   dateMinute = this.date.getMinutes();
   likeCount=0;
   unLikeCount=0;

//click buttons For like and Unlike 
  likeFunction(): void {
   this.likeCount = this.likeCount + 1;
  }
  unLikeFunction(): void {
    this.unLikeCount = this.unLikeCount + 1;
   }
}
