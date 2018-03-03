import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';


@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
    @Input() public submitButtonText = 'Submit';
    public form: FormGroup;

    @Output() formSubmit = new EventEmitter();
    formSubmitSubject = new Subject();

    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            sender: ['', Validators.required],
            body: ['', Validators.required],
        });

        this.formSubmitSubject
            .filter(() => this.form.valid)
            .map(() => this.form.value)
            .subscribe(this.formSubmit);
    }

}
