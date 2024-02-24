import { Component, Input, OnChanges } from '@angular/core';
import { Point3 } from '../../../models/cross-code-map';
import { AbstractWidget } from '../abstract-widget';

@Component({
	selector: 'app-simple-vec3-widget',
	templateUrl: './simple-vec3-widget.component.html',
	styleUrls: ['./simple-vec3-widget.component.scss', '../widget.scss']
})
export class SimpleVec3WidgetComponent extends AbstractWidget implements OnChanges {
	
	@Input() displayName = '';
	
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
	
	setVal(key: keyof Point3, val: number) {
		const setting = this.settings[this.key];
		const value = val;
		setting[key] = value;
		this.updateType(value);
	}
}
