import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {IMessage, INewMessage} from "../type";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  BASE_URL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }

  // Получение всех сообщений
  getAll(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.BASE_URL}`));
  }

  // Обновление сообщения
  createMessage(message: INewMessage) {
    return firstValueFrom(this.http.post(`${this.BASE_URL}`, message));
  }

  // Удаление сообщения
  deleteMessage(id: number){
    return firstValueFrom(this.http.delete(`${this.BASE_URL}/${id}`))
  }

  updateMessage(message: INewMessage, id: number){
    return firstValueFrom(this.http.put(`${this.BASE_URL}/${id}`, message))
  }

}
