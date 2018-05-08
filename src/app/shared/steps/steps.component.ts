import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {

  /**
	 * Steps to display (number, label, [active], [visited], [class])
	 */
  @Input() steps: any[];
	/**
	 * Optional alternate background (1)
	 */
  @Input() alt = 0;
	/**
	 * Whether to display as vertical steps
	 */
  @Input() vertical: boolean;
	/**
	 * Whether to display as small steps
	 */
  @Input() small: boolean;


}
