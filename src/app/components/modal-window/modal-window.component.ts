import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IMessage, INewMessage} from "../../../type";

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Output() closeButton: EventEmitter<any> = new EventEmitter();
  @Output() newMessage: EventEmitter<INewMessage> = new EventEmitter();
  @Input() message!: IMessage

  myForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    datetime: new FormControl('', Validators.compose([Validators.required, Validators.minLength(12)])),
    message: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
  });

  onSubmit() {
    const data: INewMessage = {
      username: this.myForm.controls.username.value || '',
      datetime: this.getDateTime(this.myForm.controls.datetime.value),
      message: this.myForm.controls.message.value || ''
    }
    this.newMessage.emit(data)
  }

  ngOnInit(): void {
    if (this.message) {
      this.myForm.controls.username.setValue(this.message.username)
      this.myForm.controls.datetime.setValue(this.getDateTimeToCalendar(this.message.datetime))
      this.myForm.controls.message.setValue(this.message.message)
    }
  }

  getDateTime(string: any) {
    const time = string.split('T')[1];
    const date = string.split('T')[0].split('-')
    return `${date[1]}-${date[2]}-${date[0]} ${time}`
  }

  getDateTimeToCalendar(string: any) {
    const time = string.split(' ')[1];
    const date = string.split(' ')[0].split('-')
    return `${date[2]}-${date[0]}-${date[1]}T${time}`
  }

}
