import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent {
  @Input() modalTitle: string;
  @Input() hideCloseButton: boolean = false;
}
