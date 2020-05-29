import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	url = 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&h=1600&q=80s';
	matter = [
		[
			'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
			'Labore irure irure laborum quis tempor aliqua. Dude',
			'February 19, 2020'
		],
		[
			'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
			'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
			'February 17, 2020'
		],
		[
			'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
			'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
			'February 15, 2020'
		]
	];
	constructor() {}

	ngOnInit(): void {}
}
