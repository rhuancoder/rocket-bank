import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  value: number;
  destination: number;

  transfer() {
    console.log('New transfer called');
    console.log('Value: ', this.value);
    console.log('Destination: ', this.destination);
  }
}
