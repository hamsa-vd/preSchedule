import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorerService } from './storer.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { from } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	formdata: FormGroup;
	outdata = [];
	constructor(private fb: FormBuilder, private storer: StorerService) {
		this.formdata = this.fb.group({
			x: [ '', [ Validators.required ] ],
			y: [ '', [ Validators.required ] ],
			name: [ '', Validators.required ]
		});
	}
	pushdata() {
		if (this.formdata.valid) this.storer.insertdata(this.formdata.value);
		this.storer.senddata({ id: 1, ...this.formdata });
	}
	printdata() {
		this.storer.getdata().subscribe((v) => {
			this.outdata = <any[]>v;
		});
	}
	public scatterChartOptions: ChartOptions = {
		responsive: true
	};
	printonly() {
		let out = [];
		this.outdata.forEach((v) => {
			out.push({
				x: (v.x % 10) / 10,
				y: (v.y % 10) / 10
			});
		});
		return out;
	}
	happy = [ { x: 1, y: 50 }, { x: 40, y: 30 }, { x: 20, y: 20 }, { x: 0, y: 0 } ];
	public scatterChartData: ChartDataSets[] = [
		{
			data: this.happy,
			label: 'Series A',
			pointRadius: 5
		}
	];
	public scatterChartType: ChartType = 'scatter';
}
