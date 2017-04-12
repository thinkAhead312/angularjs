import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <user> </user>
              `,
})
export class AppComponent  {
  name = 'Joseph';
  email = 'joseph_andrade@outlook.ph';
  address ={
    street: '12 main st',
    city: 'Cebu',
    state: 'Cebu City'
  }

 }
