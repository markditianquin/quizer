import { CollectionObject } from './collection-object.model';

export interface Quiz extends CollectionObject {
	name: string;
	description?: string;
}