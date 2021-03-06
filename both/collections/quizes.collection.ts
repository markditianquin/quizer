import { MongoObservable } from 'meteor-rxjs';

import { Quiz } from '../models/quiz.model';

export const Quizes = new MongoObservable.Collection<Quiz>('quizes');

function loggedIn() {
	return !!Meteor.user();
}

Quizes.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});