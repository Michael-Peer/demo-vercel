import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { LoginComponent } from "src/app/login/login.component";
import { TodosComponent } from "src/app/todos/todos.component";
import { Todo } from "../interfaces/todo";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todo/:id', component: Todo},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

