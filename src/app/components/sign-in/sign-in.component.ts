import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
        FormGroup, 
        Validators,
        FormsModule,
        ReactiveFormsModule, 
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  signUpForm!: FormGroup;
  isSignup = false;
  showPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  toggleShow() {
    this.isSignup = !this.isSignup;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  clearUsername() {
    this.signInForm.get('username')?.setValue('');
    this.signUpForm.get('username')?.setValue('');
  }
  
  onSubmit() {
    console.log("ts triggered")
    this.authService.login(this.signInForm.value)
      .subscribe(
        (res) => {
          console.log("login successful");
          this.router.navigate(['password-manager']);
        },
        err => console.log("error",err)
      )
  }
}
