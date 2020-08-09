import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { config } from "./config";

import { mobileNav } from "./modules/mobile-nav";
import { inputValidation } from "./modules/input-validation";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();

	mobileNav.init();
	inputValidation.init();

	config.log('app init')

};

export { App };
