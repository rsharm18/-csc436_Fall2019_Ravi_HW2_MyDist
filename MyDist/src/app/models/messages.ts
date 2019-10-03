import { Message } from './Message';


export class Messages{
    private msg:Message[];

    constructor(messages:Message[])
    {
        this.msg = messages;
    }

}