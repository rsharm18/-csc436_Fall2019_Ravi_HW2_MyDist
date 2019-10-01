import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  name:String ; //added the name property
  constructor() { 
    this.name='my image';
  }

  ngOnInit() {
  }

}
