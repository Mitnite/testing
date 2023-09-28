import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMessage} from "../../../type";

@Component({
  selector: 'message-info',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.scss']
})
export class MessageInfoComponent {
  @Input() message!: IMessage
  @Output() update: EventEmitter<IMessage> = new EventEmitter();
  isShowModal = false

  getDateTime(string: string) {
    const time = string.split(' ')[1];
    const date = string.split(' ')[0].split('-')
    return `${date[1]}.${date[0]}.${date[2]} ${time}`
  }

  updateMessage(post: any) {
    post.id = this.message.id
    this.update.emit(post)
    this.isShowModal = false
  }
}
