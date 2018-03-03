import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestore} from 'angularfire2/firestore';

@NgModule({
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase)
	],
	providers: [AngularFirestore],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
