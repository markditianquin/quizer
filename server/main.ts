import { Meteor } from 'meteor/meteor';

import { loadQuizes } from './imports/fixtures/quizes';

Meteor.startup(() => {
	loadQuizes();
})