import { Component } from '@angular/core';
import { Days } from './days';
import { Topics } from './topics';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	data = {
		dayslist: <Days[]>[],
		active_day_index: 0,
		active_topic: 0,
		add_day() {
			this.makefalse(this.dayslist);
			this.dayslist.push(new Days(`Day ${this.dayslist.length + 1}`));
		},
		dayclicked(index: number) {
			this.makefalse(this.dayslist);
			this.dayslist[index].selected = true;
			this.active_day_index = index;
		},
		topic_clicked(index: number) {
			this.makefalse(this.dayslist[this.active_day_index].topicslist);
			this.dayslist[this.active_day_index].topicslist[index].selected = true;
			this.active_topic = index;
		},
		makefalse(lst: any[]) {
			lst.forEach((v) => (v.selected = false));
		},
		include_topic(lst) {
			this.dayslist[this.active_day_index].addtopic(new Topics(lst));
		},
		deleteday(index) {
			this.dayslist.splice(index, 1);
		},
		addcontent(inpdata) {
			this.dayslist[this.active_day_index].topicslist[this.active_topic].content += inpdata;
		},
		addinstruction(inpdata) {
			this.dayslist[this.active_day_index].topicslist[this.active_topic].instruction += inpdata;
		},
		movetoday(name, topic_index) {
			this.dayslist
				.filter((v) => v.name == name)[0]
				.topicslist.push(this.dayslist[this.active_day_index].topicslist[topic_index]);
			this.dayslist[this.active_day_index].topicslist.splice(topic_index, 1);
		}
	};
}
