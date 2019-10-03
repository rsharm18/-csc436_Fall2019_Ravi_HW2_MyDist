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
   
    this.msgData= [
      new Message( "Hi",  new Date(),new User("Ravi","sha123") ),
      new Message( "How are you",  new Date(),new User("Ravi","sha123") ),
      new Message( "Hello",  new Date() ,new User("Foram","fra123")),
      new Message( "I am good",  new Date(),new User("Foram","fra123") ),
      new Message( "How about you",  new Date(),new User("Foram","fra123") ),
      new Message( "I a good too",  new Date(),new User("Ravi","sha123") ),
      new Message( "whats up",  new Date(),new User("Ravi","sha123") ),
      new Message( "Took CSC 436 in this quarter",  new Date(),new User("Ravi","sha123") ),
      new Message( "yaaaay!!",  new Date(),new User("Ravi","sha123") ),
      new Message( "Me too!",  new Date(),new User("Ravi","sha123") ),
      new Message( "Naaiceee.. c u in the class",  new Date(),new User("Ravi","sha123") )
    ]
  }

  getMessages():Message[]{

    return this.msgData;
  }
}
