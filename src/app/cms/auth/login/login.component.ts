import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Fixed typo (styleUrl -> styleUrls)
})
export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {} // Inject Router

  ngOnInit(): void {
    // Reactive Form Initialization
    this.reactiveForm = this.fb.group({
      email: ['admin@msd.go.tz', [Validators.required, Validators.email]],
      password: ['MSD12345', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.reactiveForm.valid) {
      console.log('Reactive Form Values are: ', this.reactiveForm.value);

      // Route to CMS Landing Page
      this.router.navigate(['/cms-landing']);
    } else {
      console.log('Form is invalid');
    }
  }
}
