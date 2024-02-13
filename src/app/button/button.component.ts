import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule]
})
export class ButtonComponent {

  @Output() buttonClick = new EventEmitter<string>();

  buttonClicked() {
    this.buttonClick.emit("submit-form");
  }
}
