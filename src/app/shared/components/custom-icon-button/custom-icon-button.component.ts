import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon-button',
  templateUrl: './custom-icon-button.component.html',
  styleUrls: ['./custom-icon-button.component.styl']
})
export class CustomIconButtonComponent {
  // mat-icon size
  @Input() iconSize = '24px';

  styleExpression() {
    return {
      height: this.iconSize,
      width: this.iconSize,
      'line-height': this.iconSize,
      'font-size': this.iconSize
    };
  }
}
