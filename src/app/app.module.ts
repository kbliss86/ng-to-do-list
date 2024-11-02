import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoItemComponent, AddTodoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}