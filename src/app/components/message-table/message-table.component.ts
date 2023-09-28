import {Component, OnInit} from '@angular/core';
import {DataBaseService} from "../../dataBase.service";
import {IMessage, INewMessage} from "../../../type";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'message-table',
  templateUrl: './message-table.component.html',
  styleUrls: ['./message-table.component.scss'],

})
export class MessageTableComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  messages!: IMessage[];
  MESSAGES!: IMessage[];
  filter = new FormControl('', {nonNullable: true});

  isShowModal = false;
  isShowDeleteMessage = false;
  selectedIndex = -1;

  constructor(private dataBaseService: DataBaseService) {
    this.refresh();
  }


  async refresh() {
    this.MESSAGES = await this.dataBaseService.getAll();
    this.collectionSize = this.MESSAGES.length;
    this.messages = this.MESSAGES.map((message, i) => ({...message})).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  ngOnInit(): void {
  }



  getDateTime(string: string) {
    const time = string.split(' ')[1];
    const date = string.split(' ')[0].split('-')
    return `${date[1]}.${date[0]}.${date[2]} ${time}`
  }

  getMessageById(message: IMessage) {
    console.log(message.id)
  }

  async createMessage(post: INewMessage){
    await this.dataBaseService.createMessage(post)
    this.isShowModal = false
    this.refresh();
  }

  async deleteMessage() {
    this.isShowDeleteMessage = false
    await this.dataBaseService.deleteMessage(this.messages[this.selectedIndex].id)
    this.refresh();
  }

  async updateMessage(message: IMessage) {

    const data: INewMessage = {username: message.username, datetime: message.datetime, message: message.message}
    const id = message.id

    await this.dataBaseService.updateMessage(data, id)
    this.refresh();
  }
}
