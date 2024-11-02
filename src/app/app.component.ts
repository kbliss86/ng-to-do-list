import { Component } from '@angular/core';
import { Todo } from './todo.interface';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: Todo[] = [
    { task: 'Buy groceries', completed: false, duration: 1, priority: 'medium' },
    { task: 'Complete homework', completed: true, duration: 2, priority: 'low' },
    { task: 'Exercise', completed: false, duration: 0.5, priority: 'high' }
  ];

  addTask(todo: { task: string, completed: boolean, duration: number, priority: 'low' | 'medium' | 'high' }) {
    const newTodo: Todo = {
      task: todo.task,
      completed: false,
      duration: todo.duration,
      priority: todo.priority
    };
    this.todos.push(newTodo);
  }

  onComplete(index: number) {
    this.todos[index].completed = true;
  }

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }
}
