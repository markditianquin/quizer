import { Quizes } from '../../../both/collections/quizes.collection';
import { Quiz, Question } from '../../../both/models/quiz.model';

export function loadQuizes() {
	if (Quizes.find().cursor.count() === 0) {
		const quizes: Quiz[] = [{
			name: 'Final Quiz',
			description: 'The quiz will be held at xxxx in xxxx',
			tScore: 30
		}, {
			name: 'Midterm Quiz',
			description: 'This quiz is a extra credit quiz.',
			tScore: 20
		},
		{
			name: 'First Quiz',
			description: 'Easy quiz for all',
			tScore: 10
		}];

		quizes.forEach((quiz: Quiz) => Quizes.insert(quiz));
	}
}