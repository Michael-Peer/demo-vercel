import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { AuthService } from '../services/auth.service';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  shouldHideCompleted: boolean
  selectedSizeValue: number = 20



  constructor(private _snackBar: MatSnackBar
    , private config: ConfigService,
    private router: Router,
    private authService: AuthService) { }


  ngOnInit(): void {
    this.config.getTodos(100, false).subscribe((data) => {
      this.todos = data;
    });
  }

  onNewTodoAdded(todo: Todo) {
    this.config.addNewTodo(todo)
    this._snackBar.open('Todo added successfully', 'Close', { duration: 2000 })
  }

  onChangeSelect(val: number) {
    this.selectedSizeValue = val
    this.config.getTodos(this.selectedSizeValue, this.shouldHideCompleted).subscribe((data) => {
      this.todos = data;
    });
  }


  onTodoClicked(id: number) {
    this.router.navigate(['todo', id]);
  }


  onHideCompleted(val: boolean) {

    this.shouldHideCompleted = val
    this.config.getTodos(this.selectedSizeValue, this.shouldHideCompleted).subscribe((data) => {
      this.todos = data;
    });
  }

  onCompetedChanged(todo: Todo) {
    todo.completed = !todo.completed
    this.config.updateStatus(todo)
    this.config.getTodos(this.selectedSizeValue, this.shouldHideCompleted).subscribe((data) => {
      this.todos = data;
        this._snackBar.open('Todo updated successfully', 'Close', { duration: 2000 })
    });
  }

  handleCheckboxValue(isCompleted): string {
    return JSON.stringify(isCompleted);

  }

  get userName() { return this.authService.user.username }
}


