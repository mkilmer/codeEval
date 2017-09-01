import { Component } from '@angular/core';
import { User } from './user';

var USERS: User[] = [
    {
        name: 'Walter Beans',
        phone: '555-555-1234',
        title: 'manager',
        office: '555-555-5555'
    },
    {
        name: 'Jeff Greene',
        phone: '555-555-2234',
        title: 'developer',
        office: '555-555-6666'
    }
];

@Component({
    selector: 'users',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Code Eval App';
    users = USERS;
    selectedUser: User;

    onAddClick(): void {
        var newUser = {
            name: '',
            phone: '',
            title: '',
            office: ''
        };
        this.users.push(newUser);
        console.log(this.users);
    }

    onEditClick(user: User): void {
        if (this.selectedUser === user) {
            this.selectedUser = null;
        } else {
            this.selectedUser = user;
        }
        console.log(this.users);
    }

    onDeleteClick(user: User): void {
        const index: number = this.users.findIndex(_user => _user === user);
        this.users.splice(index, 1);
        console.log(this.users);
    }
}
