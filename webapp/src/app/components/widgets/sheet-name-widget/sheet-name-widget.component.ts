import { Component, OnChanges } from '@angular/core';
import { AbstractWidget } from '../abstract-widget';
import { WMTypes } from '../event-widget/event-registry/abstract-event';

@Component({
	selector: 'app-sheet-name-widget',
	templateUrl: './sheet-name-widget.component.html',
	styleUrls: ['./sheet-name-widget.component.scss', '../widget.scss']
})
export class SheetNameWidgetComponent extends AbstractWidget implements OnChanges {
	setVal(key: keyof WMTypes.Effect, value: string) {
		if(!this.settings[this.key]) {
			this.settings[this.key] = {
				sheet: '',
				name: '',
			};
		}
		const settings: WMTypes.Effect = this.settings[this.key];
		settings[key] = value;

		if(!settings.sheet && !settings.name) {
			delete this.settings[this.key];
		}
		this.updateType(settings);
	}
}
