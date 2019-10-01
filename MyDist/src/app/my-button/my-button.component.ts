import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../services/my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  name:String; //added a property
  isliked:boolean; //boolean property
  liked:String;
  className:String;
  myService:MyServiceService;
  constructor() {
    this.name='My Button Class';
       this.isliked=false;
       this.liked="False";
       this.myService = new MyServiceService();
    }

likeClicked()
 {
  this.isliked = this.myService.likeImage(this.isliked);
  this.liked = (this.isliked ? "True":"False");
  this.className =(this.isliked ? "is-liked":"");
  } 

  getClassName():String{

    return this.className;
  }
  ngOnInit() {
  }

}
