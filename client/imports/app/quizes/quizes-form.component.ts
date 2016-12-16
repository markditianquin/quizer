import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Quizes } from '../../../../both/collections/quizes.collection';

import template from './quizes-form.component.html';

@Component({
	selector: 'quizes-form',
	template
})
export class QuizesFormComponent implements OnInit {
	addForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.addForm = this.formBuilder.group({
			name: ['', Validators.required],
			description: ['']
		});
	}

	addQuiz(): void {
		if (!Meteor.userId()) {
			alert('Please log in to add a quiz');
			return;
		}

		if (this.addForm.valid) {
			Quizes.insert((<any>Object).assign({}, this.addForm.value, { owner: Meteor.userId() }));

			this.addForm.reset();
		}
	}
}