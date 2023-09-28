import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMessage} from "../../../type";

@Component({
  selector: 'delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})
export class DeleteMessageComponent {

  @Output() closeButton: EventEmitter<any> = new EventEmitter();
  @Output() agreeButton: EventEmitter<any> = new EventEmitter();

  @Input() message!: IMessage


  getDateTime(string: string) {
    const time = string.split(' ')[1];
    const date = string.split(' ')[0].split('-')
    return `${date[1]}.${date[0]}.${date[2]} ${time}`
  }

}
