import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

import { Quizes } from '../../../../both/collections/quizes.collection';
import { Quiz } from '../../../../both/models/quiz.model';

import template from './quiz-details-edit.component.html';

@Component({
	selector: 'quiz-details-edit',
	template
})
@Injectable()
export class QuizDetailsEditComponent implements CanActivate, OnInit, OnDestroy {
	quizId: string;
	paramSub: Subscription;
	quiz: Quiz;
	quizSub: Subscription;
	qSub: Subscription;
	questions: Observable<Quiz[]>;

	constructor(
		private route: ActivatedRoute, private router: Router
	) {}

	ngOnInit() {
		this.paramSub = this.route.params
			.map(params => params['quizId'])
			.subscribe(quizId => { 
				this.quizId = quizId;

				if (this.quizSub) {
					this.quizSub.unsubscribe();
				}

				this.quizSub = MeteorObservable.subscribe('quiz', this.quizId).subscribe(() => {
					this.quiz = Quizes.findOne(this.quizId);
				});

				if (this.qSub) {
					this.qSub.unsubscribe();
				}

				this.qSub = MeteorObservable.subscribe('quizes').subscribe(() => {
					this.questions = Quizes.find({_id:this.quizId }).zone();
				})
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

	removeQ(question: Quiz): void {
		Quizes.update({_id: this.quizId }, {
			$pull: { questions: {
				_id: question._id
			}}
		})
	}

	canActivate(): Observable<boolean> | boolean{
		// console.log(this.quiz.owner);
		const quiz = Quizes.findOne(this.quizId);

		// if (!!Meteor.userId()) {

		// 	return true;
		// } else {
		// 	//this.router.navigate(['']);
		// 	return false;
		// }
		
		return (!!Meteor.userId());
	}

	ngOnDestroy() {
		this.paramSub.unsubscribe();
		this.quizSub.unsubscribe();
		this.qSub.unsubscribe();
	}
}