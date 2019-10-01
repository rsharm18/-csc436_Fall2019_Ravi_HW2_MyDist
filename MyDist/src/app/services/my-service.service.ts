import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  //bang the input boolean
   likeImage(isLiked:boolean):boolean
  {
    return !isLiked;
  }
}
