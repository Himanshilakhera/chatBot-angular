import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule ,  MatDialogConfig} from '@angular/material/dialog';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyChatBot';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ChatBotComponent);
  }

}
