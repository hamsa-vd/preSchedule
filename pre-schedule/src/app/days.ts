import { Topics } from './topics';
export class Days {
	name: string;
	selected: boolean = false;
	topicslist: Topics[] = [];
	constructor(name: string) {
		this.name = name;
	}
	addtopic(topic: Topics) {
		this.topicslist.push(topic);
	}
}
