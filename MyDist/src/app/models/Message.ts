
import {User} from './User';

export class Message{
    private timestamp:Date;
    private text:String;
private user:User;

    constructor(msg:String, time:Date,user:User)
    {
        this.text = msg;
        this.timestamp = time;
        this.user=user;
    }
}