import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

   likeImage(isLiked:boolean):boolean
  {
    return !isLiked;
  }
}
