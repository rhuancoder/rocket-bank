import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() whenTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  transfer() {
    console.log('New transfer called');
    const valueEmit = { value: this.value, destination: this.destination };
    this.whenTransfer.emit(valueEmit);
    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destination = 0;
  }
}
