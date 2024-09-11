import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
})
export class AddDataComponent {
  dataForm: FormGroup;
  items: { datetime: string, temperature: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      /* The `datetime` field in the `dataForm` FormGroup is used to capture the date and time
      information entered by the user. It is a required field, as indicated by the
      `[Validators.required]` validation rule applied to it during form initialization. This ensures
      that the user must provide a value for the `datetime` field before the form can be submitted
      successfully. */
      datetime: ['', [Validators.required]],
      temperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]]
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      this.items.push(this.dataForm.value);
      this.dataForm.reset();
    }
  }
}

