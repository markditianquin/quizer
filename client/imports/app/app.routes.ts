import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { QuizesListComponent } from './quizes/quizes-list.component';
import { QuizDetailsEditComponent } from './quizes/quiz-details-edit.component';

import { CanActivateGuard } from './quizes/CanActivateGuard';

export const routes: Route[] = [
	{ path: '', component: QuizesListComponent },
	{ path: 'quiz/:quizId', component: QuizDetailsEditComponent, canActivate: [ QuizDetailsEditComponent ] }
];

export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !!Meteor.userId()
}, CanActivateGuard, QuizDetailsEditComponent ];