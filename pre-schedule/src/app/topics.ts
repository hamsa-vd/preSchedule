export class Topics {
	name: string;
	selected: boolean = false;
	contents_aside: string[];
	content: string = '';
	instruction: string = '';
	constructor(lst) {
		[ this.name, this.contents_aside, this.content, this.instruction ] = lst;
	}
}
