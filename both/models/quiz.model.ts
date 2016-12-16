import { CollectionObject } from './collection-object.model';

export interface Quiz extends CollectionObject {
	name: string;
	description?: string;
	tScore?: number;
	questions?: Question[];
	owner?: string;
}

export interface Question extends CollectionObject {
	question: string;
	answer: string;
	type: string;
	choices: string[];
	score: string;
}