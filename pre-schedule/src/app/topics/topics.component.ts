import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-topics',
	templateUrl: './topics.component.html',
	styleUrls: [ './topics.component.scss' ],
	providers: [ NgbModalConfig, NgbModal ]
})
export class TopicsComponent implements OnInit {
	@Input('topic_matter') matter;
	@Output() topic_data = new EventEmitter();
	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
	}
	showmodal(content) {
		this.modalService.open(content);
	}
	selectday(move) {
		this.modalService.open(move);
	}
	topic_to_move: number;
	selectedday: string;
	topic_name: string;
	type_select: string[];
	topic_content: string;
	instructions: string;
	ngOnInit(): void {}
	submit() {
		this.topic_data.emit([ this.topic_name, this.type_select, this.topic_content, this.instructions ]);
	}
}
