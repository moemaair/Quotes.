import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoserviceService {
  //variables 
  public date = new Date();
  // public dateMinute = this.date.getMinutes();
  public likeCount=0;
  public unLikeCount=0;
}
