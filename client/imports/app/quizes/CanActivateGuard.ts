import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Meteor } from 'meteor/meteor';

@Injectable()
export class CanActivateGuard implements CanActivate {
	canActivate() {
		return !!Meteor.userId();
	}
}