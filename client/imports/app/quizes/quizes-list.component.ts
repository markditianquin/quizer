import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Quizes } from '../../../../both/collections/quizes.collection';
import { Quiz } from '../../../../both/models/quiz.model';

import template from './quizes-list.component.html';


@Component({
	selector: 'quizes-list',
	template
})
export class QuizesListComponent {
	quizes: Observable<Quiz[]>;

	constructor() {
		this.quizes = Quizes.find({}).zone();
	}

	removeParty(quiz: Quiz): void {
		Quizes.remove(quiz._id);
	}
}