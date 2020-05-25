import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.scss' ]
})
export class EditorComponent implements OnInit {
	@Input('sentdata') matter;
	@Output() contentdata = new EventEmitter();
	@Output() instructiondata = new EventEmitter();
	content = '';
	instructions = '';
	selection: boolean = true;
	changeselection(num: boolean) {
		this.selection = num;
	}
	senddata(bool: boolean) {
		if (bool) this.contentdata.emit(this.content);
		else this.instructiondata.emit(this.instructions);
	}
	editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: 'auto',
		minHeight: '0',
		maxHeight: 'auto',
		width: 'auto',
		minWidth: '0',
		translate: 'yes',
		enableToolbar: true,
		showToolbar: true,
		// placeholder: this.matter.dayslist.length
		// 	? this.selection
		// 		? this.matter.dayslist[this.matter.active_day_index != -1 ? this.matter.active_day_index : 0].topicslist[
		// 				this.matter.active_topic != -1 ? this.matter.active_topic : 0
		// 			].content
		// 		: this.matter.dayslist[this.matter.active_day_index != -1 ? this.matter.active_day_index : 0].topicslist[
		// 				this.matter.active_topic != -1 ? this.matter.active_topic : 0
		// 			].instruction
		// 	: 'Enter your text...',
		placeholder: 'Enter your text here...',
		defaultParagraphSeparator: '',
		defaultFontName: '',
		defaultFontSize: '',
		fonts: [
			{ class: 'arial', name: 'Arial' },
			{ class: 'times-new-roman', name: 'Times New Roman' },
			{ class: 'calibri', name: 'Calibri' },
			{ class: 'comic-sans-ms', name: 'Comic Sans MS' }
		],
		customClasses: [
			{
				name: 'quote',
				class: 'quote'
			},
			{
				name: 'redText',
				class: 'redText'
			},
			{
				name: 'titleText',
				class: 'titleText',
				tag: 'h1'
			}
		],
		uploadUrl: 'v1/image',
		uploadWithCredentials: false,
		sanitize: true,
		toolbarPosition: 'top',
		toolbarHiddenButtons: [ [ 'bold', 'italic' ], [ 'fontSize' ] ]
	};
	constructor() {}
	ngOnInit(): void {}
}
