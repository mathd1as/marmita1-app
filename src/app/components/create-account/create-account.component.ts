import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountService } from './create-account.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private createAccountService: CreateAccountService
  ) {}

  onSubmit(): void {
    const payloadBody = {
      name: this.loginForm.value.name,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.createAccountService.register(payloadBody).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
