import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Route } from '@angular/router';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: Todo = Todo.empty()

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(
    (data: Data) => {

      this.todo = data['todo']
    }
    )
  }

}
