import { Meteor } from 'meteor/meteor';
import { Quizes } from '../../../both/collections/quizes.collection';

Meteor.publish('quizes', function() {
	return Quizes.find(buildQuery.call(this));
});

Meteor.publish('quiz', function(quizId: string) {
	return Quizes.find(buildQuery.call(this, quizId));
});

function buildQuery(quizId?: string): Object {
	const isAvailable = {

	}

	if (quizId) {
		return {
			$and: [{
				_id: quizId
			},
				isAvailable
			]
		};
	}

	return isAvailable;
}