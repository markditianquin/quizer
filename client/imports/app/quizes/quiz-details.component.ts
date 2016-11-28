import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Quizes } from '../../../../both/collections/quizes.collection';
import { Quiz } from '../../../../both/models/quiz.model';

import template from './quiz-details.component.html';

@Component({
	selector: 'quiz-details',
	template
})
export class QuizDetailsComponent implements OnInit, OnDestroy {
	quizId: string;
	paramSub: Subscription;
	quiz: Quiz;
	question: Observable<any[]>;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.paramSub = this.route.params
			.map(params => params['quizId'])
			.subscribe(quizId => { 
				this.quizId = quizId

				this.quiz = Quizes.findOne(this.quizId);

			});
	}

	saveQuiz() {
		Quizes.update(this.quiz._id, {
			$set: {
				name: this.quiz.name,
				description: this.quiz.description,
				tScore: this.quiz.tScore
			}
		});
	}

	ngOnDestroy() {
		this.paramSub.unsubscribe();
	}
}