import { Injectable } from '@angular/core';
import {Message} from '../models/Message';
import {Messages} from '../models/Messages';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private msgData:Message [];
  private message:Message;
  private messages:Messages;

  
  constructor() {
    this.initChatAppData();
   }

  initChatAppData()
  {
      let user1:User;
      let user2:User;
      user1 = new User("Ravi","sha123");
      user2 = new User("Foram","fda123");

      this.msgData= [
      new Message( "Hi",  new Date(),user1),
      new Message( "How are you",  new Date(),user1 ),
      new Message( "Hello",  new Date() ,user2),
      new Message( "I am good",  new Date(),user2 ),
      new Message( "How about you",  new Date(),user2 ),
      new Message( "I a good too",  new Date(),user1 ),
      new Message( "whats up",  new Date(),user1),
      new Message( "Took CSC 436 in this quarter",  new Date(),user2 ),
      new Message( "yaaaay!!",  new Date(),user1 ),
      new Message( "Me too!",  new Date(), user1),
      new Message( "Naaiceee.. c u in the class",  new Date(),user1)
    ]
  }

  getMessages():Message[]{

    return this.msgData;
  }
}
