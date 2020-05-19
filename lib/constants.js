'use strict';

// Supported buttons on the Neeo Remote (https://github.com/NEEOInc/neeo-sdk/blob/cb2bc15899a5a96575cfc6850f2b001c7cddf280/widgetDocumentation.md)
module.exports = {
	KEY_DELAY: 100,
	BUTTON: {
		//-------------------------
		// Buttongroup: Power
		//-------------------------
		POWER_ON: '0,102',
		POWER_OFF: '0,102',
		//-------------------------
		// Buttongroup: Menu and Back
		//-------------------------
		MENU: '0,101',
		BACK: '0,41',
		//-------------------------
		// Buttongroup: Controlpad
		//-------------------------
		CURSOR_UP: '0,82',
		CURSOR_DOWN: '0,81',
		CURSOR_LEFT: '0,80',
		CURSOR_RIGHT: '0,79',
		CURSOR_ENTER: '0,40',
		//-------------------------
		// Buttongroup: Volume
		//-------------------------
		VOLUME_UP: '0,237',
		VOLUME_DOWN: '0,238',
		MUTE_TOGGLE: '0,239',
		//-------------------------
		// Buttongroup: Transport
		//-------------------------
		PLAY: '0,232',
		PAUSE: '0,232',
		STOP: '0,243',
		//-------------------------
		// Buttongroup: Transport Scan
		//-------------------------
		PREVIOUS: '0,234',
		NEXT: '0,235',
		//-------------------------
		// Buttongroup: Transport Skip
		//-------------------------
		SKIP_SECONDS_FORWARD: '0,242',
		SKIP_SECONDS_BACKWARD: '0,241',
		//-------------------------
		// Custom buttons
		//-------------------------
		HOME: '1,41',
	}
};
