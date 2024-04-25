import { StateHistoryService } from '../components/dialogs/floating-window/history/state-history.service';
import { AutotileService } from './autotile/autotile.service';
import { GlobalEventsService } from './global-events.service';
import { HttpClientService } from './http-client.service';
import { MapLoaderService } from './map-loader.service';
import { EntityRegistryService } from './phaser/entities/registry/entity-registry.service';
import { PhaserEventsService } from './phaser/phaser-events.service';
import { CCMap } from './phaser/tilemap/cc-map';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from './settings.service';
import entities from '../../assets/entities.json';
import actions from '../../assets/actions.json';
import events from '../../assets/events.json';

export class Globals {
	static isElectron = false;
	static panning = false;
	static game: Phaser.Game;
	static scene: Phaser.Scene;
	static map: CCMap;
	static TILE_SIZE = 16;
	static URL = 'http://localhost:8080/';
	static entitySettings = {
		gridSize: 8,
		enableGrid: false
	};
	static disablePhaserInput = new Set<any>();
	static entities = entities; //use vanilla as a "fallback"
	static actions = actions;
	static events = events;
	static fontColors =  [
		null,	   // \c[0] White
		'#ff6969', // \c[1] Red
		'#65ff89', // \c[2] Green
		'#ffe430', // \c[3] Yellow
		'#808080', // \c[4] Gray
		//'#ff8932',  \c[5] Orange, only used for small font in vanilla
	];

	// TODO: remove them from global state
	static stateHistoryService: StateHistoryService;
	static mapLoaderService: MapLoaderService;
	static globalEventsService: GlobalEventsService;
	static phaserEventsService: PhaserEventsService;
	static autotileService: AutotileService;
	static entityRegistry: EntityRegistryService;
	static httpService: HttpClientService;
	static settingsService: SettingsService;
	static snackbar: MatSnackBar;
}
