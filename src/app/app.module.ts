import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TodosService } from './services/todos.service';
import { TodoResolver } from './shared/routing/resolvers/todo-resolver';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { AuthService } from './services/auth.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StorageService } from './services/storage.service';
import {MatButtonModule} from '@angular/material/button';
import { FiltersComponent } from './filters/filters.component';
import { AuthGuard } from './shared/routing/guards/AuthGuard';
import { MatGridListModule } from '@angular/material/grid-list';
import { IsLoggedInGuard } from './shared/routing/guards/isLoggedinGuard';
import { MatDialogModule } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent, canActivate: [AuthGuard]},
  {path: 'add-todo', component: AddTodoComponent, canActivate: [AuthGuard]},
  {path: 'todo/:id', component: TodoComponent, resolve:{
    todo: TodoResolver
  },  canActivate: [AuthGuard]
},
  {path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard]},
  {path: '**', redirectTo: ''}
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    TodoComponent,
    HomeComponent,
    FormErrorsComponent,
    AddTodoComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    NgxChartsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  providers: [TodosService, TodoResolver, AuthService, StorageService, {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
