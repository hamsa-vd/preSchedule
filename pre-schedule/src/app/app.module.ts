import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
//import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { TopicsComponent } from './topics/topics.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
	declarations: [ AppComponent, DaysComponent, TopicsComponent, EditorComponent ],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		//	NgbModalModule,
		BrowserAnimationsModule,
		FormsModule,

		AngularEditorModule
		//DragDropModule,
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
