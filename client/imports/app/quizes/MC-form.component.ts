import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { Quizes } from '../../../../both/collections/quizes.collection';
import { Quiz, Question } from '../../../../both/models/quiz.model';

import template from './MC-form.component.html';

@Component({
	selector: 'mc-form',
	template
})
export class MCFormComponent implements OnInit {
	@Input() quizId: string;
	addForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.addForm = this.formBuilder.group({
			question: ['', Validators.required],
			answer: ['', Validators.required],
			score: ['', Validators.required],
			type: ['mc'],
			choices: this.formBuilder.array([
					this.initChoice(),
				])
		});
	}

	initChoice() {
		return this.formBuilder.group({
			choice: ['', Validators.required]
		});
	}

	addChoice() {
		const control = <FormArray>this.addForm.controls['choices'];
		control.push(this.initChoice());
	}

	removeChoice(i: number) {
		const control = <FormArray>this.addForm.controls['choices'];
		control.removeAt(i);
	}

	addQ(model: Question): void {

		console.log(this.addForm.value);

		if (this.addForm.valid) {
			Quizes.update({_id: this.quizId}, {
				$push: {
					questions: model['value']
				}
			})

			this.addForm.reset();
		}
	}
}