import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChatBotService } from '../chat-bot.service';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})

export class ChatBotComponent implements OnInit {
content = '';
messages:any = [];

@ViewChild('messageContainer') private messageContainer!: ElementRef;

  constructor(public dialogRef: MatDialogRef<ChatBotComponent>,
    public Service: ChatBotService) { }
  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  sendMsg(){
    const message = {
     isSender: true,
     content: this.content
    };

    const data = {
      question: this.content
    };

this.messages.push(message);
this.scrollMessageContainerToBottom();
this.Service.post('https://b8aa-103-180-81-98.ngrok-free.app/api/v1/bot',data).subscribe({
  next:(response:any) => {
    console.log("message : "+response.reply.answer);
      console.log(response);
      const message = {
        isSender: false,
        content: response.reply.answer
       };
this.messages.push(message);
this.scrollMessageContainerToBottom();

  },error(err) {
      console.log(err)
  },
})
this.content='';
  }

  private scrollMessageContainerToBottom(): void {
    setTimeout(() => {
      const containerElement = this.messageContainer.nativeElement;
      containerElement.scrollTop = containerElement.scrollHeight;
    }, 0);
  }
}
