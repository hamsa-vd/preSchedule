import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	formdata: FormGroup;
	states: string[][] = [ [ '' ], [ '' ], [ '' ] ];
	cities: string[][] = [ [ '' ], [ '' ], [ '' ] ];
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
	showtoastr(str) {
		this.toastr.error('is an invalid field', str);
	}
	assignstates(i) {
		this.states[i] = Object.keys(this.countrydata[this.formdata.get('address').controls[i].get('country').value]);
	}
	refresh(): void {
		window.location.reload();
	}
	assigncities(i) {
		this.cities[i] = this.countrydata[this.formdata.get('address').controls[i].get('country').value][
			this.formdata.get('address').controls[i].get('state').value
		];
	}
	checkpassword() {
		if (this.formdata.get('confpassword').valid && this.formdata.get('confpassword'))
			if (this.formdata.get('confpassword').value != this.formdata.get('password').value)
				alert("passwords doesn't match");
	}
	submit() {
		this.validity = this.formdata.valid;
		console.log(this.validity);
		console.log(this.formdata.value);
	}
	//,private toastr: ToastrService
	constructor(private fb: FormBuilder, private toastr: ToastrService) {
		alert('click on the form');
		this.formdata = this.fb.group({
			name: [ '', [ Validators.required ] ],
			email: [ '', [ Validators.required, Validators.email ] ],
			tel: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required, Validators.minLength(8) ] ],
			confpassword: [ '', [ Validators.required, Validators.minLength(8) ] ],
			address: this.fb.array([
				this.fb.group({
					country: [ '', [ Validators.required ] ],
					state: [ '', [ Validators.required ] ],
					city: [ '', [ Validators.required ] ]
				}),
				this.fb.group({
					country: [ '', [ Validators.required ] ],
					state: [ '', [ Validators.required ] ],
					city: [ '', [ Validators.required ] ]
				}),
				this.fb.group({
					country: [ '', [ Validators.required ] ],
					state: [ '', [ Validators.required ] ],
					city: [ '', [ Validators.required ] ]
				})
			]),
			gender: [ '', [ Validators.required ] ],
			maritalStatus: [ '', [ Validators.required ] ],
			food: [ '', [ Validators.required ] ],
			color: [ '', [ Validators.required ] ]
		});
	}
}
