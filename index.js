'use strict'

let { AppleHealthKit } = require('react-native').NativeModules;

import { Permissions } from './Constants/Permissions'
import { NutririonIntakes } from './Constants/NutritionIntakes'
import { Units } from './Constants/Units'

let HealthKit = Object.assign({}, AppleHealthKit, {
	Constants: {
		Permissions: Permissions,
		NutririonIntakes: NutririonIntakes,
		Units: Units,
	}
});

export default HealthKit
module.exports = HealthKit;
