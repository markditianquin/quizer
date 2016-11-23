import { Quizes } from '../../../both/collections/quizes.collection';
import { Quiz } from '../../../both/models/quiz.model';

export function loadQuizes() {
	if (Quizes.find().cursor.count() === 0) {
		const quizes: Quiz[] = [{
			name: 'Final Quiz'
		}, {
			name: 'Midterm Quiz'
		},
		{
			name: 'First Quiz'
		}];

		quizes.forEach((quiz: Quiz) => Quizes.insert(quiz));
	}
}