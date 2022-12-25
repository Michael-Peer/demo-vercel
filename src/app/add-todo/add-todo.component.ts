import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() newTodo = new EventEmitter<Todo>()
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: ['',[Validators.required]],
    })
  }

  onSubmit() {
    if(this.todoForm.invalid) return
    this.newTodo.emit({...this.todoForm.value, id: Math.floor(Math.random() * 100000)})
  }

  get title() { return this.todoForm.get('title'); }


}
