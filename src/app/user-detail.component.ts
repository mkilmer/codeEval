import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent {
    @Input() user: User;
    @Output() onClosed: EventEmitter<any> = new EventEmitter<any>();

    onCloseClick(user){
        this.onClosed.emit(user);
    }

}
