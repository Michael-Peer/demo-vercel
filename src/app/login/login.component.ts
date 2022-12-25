import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { nameValidator, passwordStrenghValidator } from '../validators/form-validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  loginSub: Subscription

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, nameValidator()]],
      password: ['', [Validators.required, passwordStrenghValidator()]],

    })
  }

  ngOnDestroy(): void {
    this.loginSub?.unsubscribe()
  }

  onSubmit() {
    if(this.loginForm.invalid) return

     this.loginSub = this.authService.login(this.loginForm.value).subscribe((users: any) => {

      this.authService.setUser(
        {
          id: users[0].id,
          username: users[0].username
        }
      )
      this.router.navigate(['todos']);
    })
  }

  getInputStyleByValidity(inputName:string) {
    if (this.loginForm.get(inputName)?.invalid && this.loginForm?.get(inputName)?.touched) {
      return 'invalid';
    } else if (this.loginForm.get(inputName)?.valid && this.loginForm.get(inputName)?.touched) {
      return 'valid';
    }
    return ''
  }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

}
