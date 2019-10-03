
import {User} from './User';

export class Message{
    private timestamp:String;
    private text:String;
private user:User;

    constructor(msg:String, time:Date,user:User)
    {
        this.text = msg;
        this.timestamp = time.toTimeString()
        this.user=user;
    }
}