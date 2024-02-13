import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'form-field-w-hint',
  templateUrl: './form-field-w-hint.component.html',
  styleUrl: './form-field-w-hint.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class FormFieldWHintComponent {
  formControl = new FormControl("");
  @Output() formControlValueToParent = new EventEmitter<string>();

  @Input() label = "";


  handleChanges() {
    if (this.formControl.value) {
      this.formControlValueToParent.emit(this.formControl.value);
    }
  }
  
}
