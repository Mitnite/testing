import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageTableComponent} from "./components/message-table/message-table.component";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule, NgbPaginationModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {AsyncPipe, DecimalPipe, NgFor, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditMessageComponent } from './components/edit-message/edit-message.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { DeleteMessageComponent } from './components/delete-message/delete-message.component';
import { MessageInfoComponent } from './components/message-info/message-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageTableComponent,
    MessageTableComponent,
    EditMessageComponent,
    ModalWindowComponent,
    DeleteMessageComponent,
    MessageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgIf,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
