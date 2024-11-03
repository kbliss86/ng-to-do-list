import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<{task: string, duration: number; priority: 'low' | 'medium' | 'high'; completed: boolean }>(); // Add duration to the event emitter

  task: string = '';
  duration: number = 0; // Initialize duration to 0
  priority: 'low' | 'medium' | 'high' = 'low';

  onAdd() {
    if (this.task && this.duration > 0) {
      this.add.emit({
        task: this.task, 
        duration: Number(this.duration),
        priority: this.priority,
        completed: false
      }); // Pass duration to the event emitter
      this.task = '';
      this.duration = 0;
    }
  }

}
