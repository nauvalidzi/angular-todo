import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { faTrash, faPenSquare, faCheckCircle as fasCheckCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  todoObj: Todo = new Todo();
  todoArr: any[] = [];
  editIcon = faPenSquare;
  delIcon = faTrash;
  doneCheckCircle = fasCheckCircle;
  undoneCheckCircle = farCheckCircle;
  addNew = faPlusSquare;
  alertNotif: boolean = false;
  alertMessage: string = '';

  constructor(private todoService: TodoService) {
    //
  }

  ngOnInit(): void {
    this.todoObj = new Todo();

    this.todoService.getAllTodo().subscribe(res => {
      this.todoArr = res.sort((a: any, b: any) => {
        return a.status - b.status;
      });
      // console.log(this.todoObj);
    }, err => {
      console.log(err.message);
    })
  }

  addTodo(value: any) {
    this.todoObj.title = value.title;
    this.todoObj.status = 0;
    this.todoObj.body = '';
    this.todoService.createTodo(this.todoObj).subscribe(res => {
      this.ngOnInit();
      this.alertNotif = true;
      this.alertMessage = res.message;
    }, err => {
      alert(err.message);
    })
  }

  editTodo(value: any) {
    this.todoObj.title = value.title;
    this.todoObj.body = value.body;
    this.todoService.updateTodo(this.todoObj).subscribe(res => {
      this.ngOnInit();
      this.alertNotif = true;
      this.alertMessage = res.message;
    }, err => {
      alert(err.message);
    })
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert(err.message);
    })
  }

  call(eTodo: Todo) {
    this.todoObj = eTodo;
  }

  changeStatus(eTodo: Todo) {
    this.todoObj = eTodo;
    this.todoObj.status = eTodo.status == 1 ? 0 : 1;
    this.todoService.updateTodo(this.todoObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert(err.message);
    })
  }

}
