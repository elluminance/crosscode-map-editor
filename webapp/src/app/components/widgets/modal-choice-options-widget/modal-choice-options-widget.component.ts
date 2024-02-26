import { Component, OnChanges } from '@angular/core';
import { AbstractWidget } from '../abstract-widget';
import { WMTypes } from '../event-widget/event-registry/abstract-event';

@Component({
	selector: 'app-sheet-name-widget',
	templateUrl: './modal-choice-options-widget.component.html',
	styleUrls: ['./modal-choice-options-widget.component.scss', '../widget.scss']
})
export class ModalChoiceOptionsWidgetComponent extends AbstractWidget implements OnChanges {
	get options() {
		return this.settings[this.key];
	}

	override ngOnChanges(): void {
		super.ngOnChanges();
		if(!this.settings[this.key]) {
			const value: WMTypes.ModalChoiceOptions = [];
			this.settings[this.key] = value;
			this.updateType(value);
		}
	}

	addOption() {
		console.log('adding option');
	}
}
