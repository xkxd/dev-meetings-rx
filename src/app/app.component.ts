import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	items: Observable<any[]>;

	constructor(db: AngularFirestore) {
	    this.db = db;
		this.items = db.collection('messages').valueChanges();
	}

    add(stuff) {
        this.db.collection('messages').add({
            ...stuff,
            timestamp: Date.now()
        });
    }
}
