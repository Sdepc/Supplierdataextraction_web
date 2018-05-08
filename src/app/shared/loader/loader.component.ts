import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  /**
	 * Optional text to display with the loader
	 */
  @Input() label: string;
	/**
	 * Optional loading dots color (muted [default], white, info, primary, warning)
	 */
  @Input() color = 'muted';

	/**
	 * Returns the loading dots color class string
	 * @returns The color class string
	 */
  public getColorClass() {
    if (this.color === 'white') {
      return '';
    }

    return `loading-dots--${this.color}`;
  }


}
