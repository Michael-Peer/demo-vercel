import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ConfigService } from "src/app/config/config.service";
import { TodosService } from "src/app/services/todos.service";
import { Todo } from "../../interfaces/todo";

@Injectable()
export class TodoResolver implements Resolve<Todo> {

  constructor(private todoService: ConfigService){}

  resolve(route: ActivatedRouteSnapshot, start: RouterStateSnapshot): Observable<Todo> | Promise<Todo> | Todo{
    return this.todoService.getTodoById(+route.params['id'])
  }
  }

