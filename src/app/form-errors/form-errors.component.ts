import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit{


  errList: any = []

  @Input() controlName: AbstractControl | AbstractControlDirective;


  errorMessage = {
    'required'  : (params: any)  => `This field is required`,
    'minlength' : (params : any)  => `Minimum ${params.requiredLength} characters are required`,
    'whitespace': (params : any)   => `White spaces are not allowed`
};

ngOnInit(): void {

}

// renderErrors() {
//   if (!this.controlName) return [];
//   if (this.controlName.errors) {
//       this.errList = [];
//       Object.keys(this.controlName.errors).map( error => {
//           this.controlName.touched || this.controlName.dirty ?
//           this.errList.push(this.errorMessage[error](this.controlName.errors[error])) : '';
//       });
//       return this.errList;
//   }
//   else {
//       return [];
//   }
// }


}
