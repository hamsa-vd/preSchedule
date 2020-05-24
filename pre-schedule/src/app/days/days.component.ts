import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-days',
	templateUrl: './days.component.html',
	styleUrls: [ './days.component.scss' ]
})
export class DaysComponent implements OnInit {
	@Input('matter') matter;
	// @Output() clickEvent = new EventEmitter();
	// dayslist: string[] = [ 'Day 1', 'Day 2' ];
	// send_add_day() {
	// 	this.dayslist.push(`Day ${this.dayslist.length + 1}`);
	// 	this.clickEvent.emit(this.dayslist);
	// }
	@Output() deleteclick = new EventEmitter();
	deleteindex(index) {
		this.deleteclick.emit(index);
	}
	constructor() {}
	ngOnInit(): void {}
}
