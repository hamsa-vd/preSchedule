import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorerService {
	inpdata: object[] = [];
	insertdata(data: object) {
		this.inpdata.push(data);
	}
	constructor() {}
}
