import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    login: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const payloadBody = {
      email: this.loginForm.value.login,
      password: this.loginForm.value.password,
    };
    this.loginService.authenticate(payloadBody).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user.id);
        localStorage.setItem('userEmail', response.user.email);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
