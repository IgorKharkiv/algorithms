import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HomeComponentComponent,
  RecursionsComponentComponent,
  SearchComponent,
  LinkedListComponent,
  DoublyLinkedListComponent,
  StackComponent,
  QueueComponent,
} from '@components/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RecursionsComponentComponent,
    SearchComponent,
    LinkedListComponent,
    DoublyLinkedListComponent,
    StackComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
