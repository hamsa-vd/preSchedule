import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorerService } from './storer.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	formdata: FormGroup;
	constructor(private fb: FormBuilder,private storer:StorerService) {
		this.formdata = this.fb.group({
			name: [ '', Validators.required ],
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', Validators.required ]
    });
    
	}
}
