import { Helper } from '../../../../services/phaser/helper';
import { Label, Person } from '../../../../models/events';
import { EntityAttributes } from '../../../../services/phaser/entities/cc-entity';
import { AbstractEvent, EventType } from './abstract-event';
import { DefaultEvent } from './default-event';

export interface SelectFirstData extends EventType {
    [key: number]: AbstractEvent<any>[];
    
    options: string[];
}

export class SelectFirst extends DefaultEvent<SelectFirstData> {
    override update() {
        this.children = [];
        this.info = this.combineStrings(
            this.getTypeString('#7ea3ff')
        );
        
        this.data.options.forEach((option, index) => {
            this.children[index] = {
                title: this.getColoredString('Condition: ', '#838383') + (option ?? ''),
                events: this.data[index] || [],
                draggable: false
            };
        });
    }
    
    
    override export(): SelectFirstData {
        const out: SelectFirstData = {
            type: this.data.type,
            options: this.data.options,
        };
        this.children.forEach((child, index) => {
            if (!child.events) {
                console.error('wtf', this);
            }
            out[index] = child.events.map(v => v.export());
        });
        
        return Helper.copy(out);
    }
    
    protected override generateNewDataInternal() {
        return {
            options: []
        };
    }
}
