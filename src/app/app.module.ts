import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import {MessageFormComponent} from './message-form/message-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';

@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        MarkdownToHtmlModule,
        ReactiveFormsModule
    ],
    providers: [AngularFirestore],
    declarations: [AppComponent, MessageFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
