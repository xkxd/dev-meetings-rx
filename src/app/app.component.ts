import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {ViewEncapsulation} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {concat, concatMap, filter, map, mergeMap, switchMap, scan} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {from} from "rxjs/observable/from";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'app';
    items: Observable<any[]>;
    sitebarItems: Observable<any[]>;
    db: AngularFirestore;

    constructor(db: AngularFirestore) {
        this.db = db;
        this.items = db.collection('messages', ref => ref.orderBy('timestamp', 'desc')).valueChanges();

        this.sitebarItems = this.items.pipe(
            switchMap(
                (el) => from(el).pipe(
                    filter(msg => msg.body.includes('http')),
                    scan((acc, i) => acc.concat(i), [])
                )
            )
        );
    }

    add(stuff) {
        this.db.collection('messages').add({
            ...stuff,
            timestamp: Date.now()
        });
    }
}
