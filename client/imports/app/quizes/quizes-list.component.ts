import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { Quizes } from '../../../../both/collections/quizes.collection';
import { Quiz } from '../../../../both/models/quiz.model';

import template from './quizes-list.component.html';


@Component({
	selector: 'quizes-list',
	template
})
export class QuizesListComponent implements OnInit, OnDestroy {
	quizes: Observable<Quiz[]>;
	quizesSub: Subscription;

	ngOnInit() {
		this.quizes = Quizes.find({}).zone();
		this.quizesSub = MeteorObservable.subscribe('quizes').subscribe();
	}

	removeParty(quiz: Quiz): void {
		Quizes.remove(quiz._id);
	}

	ngOnDestroy() {
		this.quizesSub.unsubscribe();
	}
}