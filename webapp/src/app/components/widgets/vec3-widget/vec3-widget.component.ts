import { Component, Input, OnChanges } from '@angular/core';
import { AbstractWidget } from '../abstract-widget';
import { WMTypes } from '../event-widget/event-registry/abstract-event';

@Component({
	selector: 'app-vec3-widget',
	templateUrl: './vec3-widget.component.html',
	styleUrls: ['./vec3-widget.component.scss', '../widget.scss']
})
export class Vec3WidgetComponent extends AbstractWidget implements OnChanges {
	
	@Input() displayName = '';

	get usingLvl() {
		return 'lvl' in this.settings[this.key];
	}
	
	override ngOnChanges(): void {
		super.ngOnChanges();
		if (!this.settings[this.key]) {
			const value = {
				x: 0, 
				y: 0, 
				z: 0,
			};
			this.settings[this.key] = value;
			this.updateType(value);
		}
	}
	
	toInt(value: string) {
		return parseInt(value, 10);
	}
	
	setVal(key: keyof WMTypes.Vec3, val: number) {
		const setting = this.settings[this.key];
		const value = val;
		setting[key] = value;
		this.updateType(value);
	}
}
