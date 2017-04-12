import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}} </h1>
              <p><strong> Email: </strong> {{email}} </p>
              <p><strong> Address: </strong> {{address.street}}  {{address.city}} {{address.state}} </p>
              <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies": "Show Hobbies"}} </button>
              <div *ngIf="showHobbies">
                <h3>Hobbies </h3>
                <ul>
                  <li *ngFor="let hobby of hobbies">
                    {{hobby}}
                  </li>
                </ul>
              </div>
              <h3> Edit User </h3>
              <form>
                <label>Name: </label> <br />
                <input type ="text" name="name" [(ngModel)]="name" /> <br/>

                <label>Email: </label> <br />
                <input type ="text" name="email" [(ngModel)]="email" /> <br/>

                <label>Street: </label> <br />
                <input type ="text" name="address.street" [(ngModel)]="address.street" /> <br/>

                <label>City: </label> <br />
                <input type ="text" name="address.city" [(ngModel)]="address.city" /> <br/>

                <label>State: </label> <br />
                <input type ="text" name="address.state" [(ngModel)]="address.state" /> <br/>
              </form>
              `,
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

  constructor() {
    this.name = '';
    this.email = '',
    this.address = {
      street: 'Buhisan',
      city: 'Cebu',
      state: 'Cebu City'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }

  toggleHobbies() {
    console.log("show");
    this.showHobbies = !this.showHobbies;
  }

 }

interface address {
  street: string;
  city: string;
  state: string;
}
