import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() onChangeSelect = new EventEmitter<number>();
  @Output() onHideCompleted = new EventEmitter<boolean>();


  numOfTodos = [
    5, 10, 20, 100
  ]


  emitOnChangeSelect(event: MatSelectChange) {

    this.onChangeSelect.emit(event.value);
  }

  emitOnHideCompleted(event: MatCheckboxChange) {
    this.onHideCompleted.emit(event.checked);
  }


}
