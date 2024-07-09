import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateAccountService } from './create-account.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private createAccountService: CreateAccountService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {}

  onSubmit(): void {
    const payloadBody = {
      name: this.loginForm.value.name,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.createAccountService.register(payloadBody).subscribe(
      (reponse) => {
        this._snackBar.open('Email cadastrado com sucesso', 'fechar');
      },
      (response) => {
        if (response.error.log === 'email_already_registered') {
          this._snackBar.open('Email ja cadastrado', 'fechar');
        }
      }
    );
  }

  isValidInputs() {
    if (this.loginForm.get('name')?.errors || this.loginForm.get('password')?.errors || this.loginForm.get('email')?.errors) return false;
    return true;
  }

  redirectToLoginPage(){
    this.router.navigate(['/account/login']);
  }
}
