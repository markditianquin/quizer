import { Meteor } from 'meteor/meteor';

import './imports/publications/quizes';

import { loadQuizes } from './imports/fixtures/quizes';

Meteor.startup(() => {
	loadQuizes();
})