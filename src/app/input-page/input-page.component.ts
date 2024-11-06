import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  tipForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.tipForm = this.fb.group({
      cost: ['', [Validators.required, Validators.min(0.01)]],
      serviceQuality: ['15', Validators.required],
      roundUp: [false]
    });
  }

  onSubmit() {
    if (this.tipForm.valid) {
      const formData = this.tipForm.value;
      localStorage.setItem('tipFormData', JSON.stringify(formData)); // Store data temporarily
      this.router.navigate(['/output']);
    }
  }
}
