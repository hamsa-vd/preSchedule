import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	formdata: FormGroup;
	states: string[];
	cities: string[];
	validity: boolean = false;
	mouseon: boolean = false;
	countrydata = {
		ind: {
			tamilnadu: [ 'chennai', 'kancheepuram' ],
			'Andhra Pradesh': [ 'vizag', 'amaravathi' ],
			karnataka: [ 'Bengaluru', 'Belgaum' ]
		},
		aus: {
			'new south valley': [ 'sydney', 'new castle' ],
			victoria: [ 'melbourne', 'geelong' ],
			'westen australia': [ 'perth', 'albany' ]
		},
		usa: {
			'new york': [ 'new york city', 'albany' ],
			washignton: [ 'seattle', 'olympia' ],
			'los angeles': [ 'los angelees', 'west hollywood' ]
		}
	};
	isvalid() {
		this.validity = this.formdata.valid;
	}
	showtoastr(str) {
		this.toastr.error('is an invalid field', str);
	}
	assignstates() {
		this.states = <[]>Object.keys(this.countrydata[this.formdata.get('country').value]);
	}
	refresh(): void {
		window.location.reload();
	}
	assigncities() {
		this.cities = this.countrydata[this.formdata.get('country').value][this.formdata.get('state').value];
	}
	checkpassword() {
		if (this.formdata.get('confpassword').valid && this.formdata.get('confpassword'))
			if (this.formdata.get('confpassword').value != this.formdata.get('password').value)
				alert("passwords doesn't match");
	}
	submit() {
		console.table(this.formdata.value);
		console.log(this.formdata.valid);
		console.log(Object.keys(this.countrydata[this.formdata.get('country').value]));
	}
	constructor(private toastr: ToastrService) {
		alert('click on the form');
		this.formdata = new FormGroup({
			name: new FormControl('', [ Validators.required ]),
			email: new FormControl('', [ Validators.required, Validators.email ]),
			tel: new FormControl('', [ Validators.required ]),
			password: new FormControl('', [ Validators.required, Validators.minLength(8) ]),
			confpassword: new FormControl('', [ Validators.required, Validators.minLength(8) ]),
			country: new FormControl('', [ Validators.required ]),
			state: new FormControl('', [ Validators.required ]),
			city: new FormControl('', [ Validators.required ]),
			gender: new FormControl('', [ Validators.required ]),
			maritalStatus: new FormControl('', [ Validators.required ]),
			food: new FormControl('', [ Validators.required ]),
			color: new FormControl('', [ Validators.required ])
		});
	}
}
