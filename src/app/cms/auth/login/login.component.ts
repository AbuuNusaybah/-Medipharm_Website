import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Reactive Form Initialization
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.nullValidator,]],
    });
  }

  onSubmit(): void {
    if (this.reactiveForm.valid) {
      console.log('Reactive Form Values are: ', this.reactiveForm.value);
    }
  }
}
