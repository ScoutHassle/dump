'use strict';

const pauseUIRoot = "pauseUI";

class PauseUI {
	constructor() {
		this.root = null;
	}

	initialise() /* ControlsUI */ {
		const head = document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.type = 'text/javascript';

		script.onload = function() {
			globalUI.sceneLoadComplete(UIScene.Pause, pauseUI);
		}
		script.src = './assets/ui/pause.js';
		head.appendChild(script);
		return this;
	}

	findSubNodes() {
		
	}

	show() {
		document.getElementById(pauseUIRoot).style.display = "";

		// Show overlay
		const overlay = globalUI.getUIScene(UIScene.Overlay);
		if(overlay != null)	overlay.show();
		
		// Also show the controls
		const controls = globalUI.getUIScene(UIScene.UIScene_Controls);
		if(controls != null) controls.showForPause();
	}

	hide() {
		document.getElementById(pauseUIRoot).style.display = "none";

		// Hide overlay
		const overlay = globalUI.getUIScene(UIScene.Overlay);
		if(overlay != null)	overlay.hide();
		
		// Also hide the controls
		const controls = globalUI.getUIScene(UIScene.UIScene_Controls);
		if(controls != null) controls.hideForPause();
	}
}
