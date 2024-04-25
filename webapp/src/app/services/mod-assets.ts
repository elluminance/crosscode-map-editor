import { Globals } from './globals';

export async function loadModAssets() {
    const modAssets: Record<string, any> = await fetch(Globals.URL + 'api/allModDefinitions', {
        method: 'GET'
    }).then(response => response.json());
    for(const [mod, definitions] of Object.entries(modAssets)) {
        if(definitions.entities) {
            Object.assign(Globals.entities, definitions.entities);
        } 
        if(definitions.fontColors) {
            Object.assign(Globals.fontColors, definitions.fontColors);
        }
        if(definitions.actions) {
            Object.assign(Globals.actions, definitions.actions);
        }
        if(definitions.events) {
            Object.assign(Globals.events, definitions.events);
        }
    }
}
