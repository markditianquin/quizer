import { Route } from '@angular/router';

import { QuizesListComponent } from './quizes/quizes-list.component';
import { QuizDetailsComponent } from './quizes/quiz-details.component';

export const routes: Route[] = [
	{ path: '', component: QuizesListComponent },
	{ path: 'quiz/:quizId', component: QuizDetailsComponent }
];