import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SessionService } from '../../session/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private sessionService: SessionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const payloadBody = {
      email: this.loginForm.value.login,
      password: this.loginForm.value.password,
    };
    this.loginService.authenticate(payloadBody).subscribe(
      (response) => {
        this.sessionService.save(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        this._snackBar.open('Email ou senha inválidos.', 'fechar');
        console.log(error);
      }
    );
  }

  isValidInputs() {
    if (this.loginForm.get('login')?.errors || this.loginForm.get('password')?.errors) return false;
    return true;
  }

  redirectToRegistrationPage(){
    this.router.navigate(['/account/registration']);
  }
}
