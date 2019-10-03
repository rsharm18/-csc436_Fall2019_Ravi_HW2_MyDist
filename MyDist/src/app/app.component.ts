import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service.ts.service';
import { Message } from './models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDist';
  msgService:MessagesService;
  msgData:Message[];

  constructor()
  {
   this.msgService = new MessagesService();
   this.getMessageData();
  }

  getMessageData()
  {
    this.msgData = this.msgService.getMessages();
  }

}
