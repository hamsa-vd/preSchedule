import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class StorerService {
	inpdata: object[] = [];
	dataurl = 'https://5ed0cfa04e6d7200163a01e3.mockapi.io/hava-angular/api/v1/data';
	insertdata(data: object) {
		this.inpdata.push(data);
	}
	constructor(private http: HttpClient) {}
	getdata() {
		return this.http.get(this.dataurl);
	}
	senddata(data) {
		return this.http.post(this.dataurl, data);
	}
}
