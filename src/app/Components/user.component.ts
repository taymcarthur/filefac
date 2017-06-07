import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>`,
})

export class UserComponent  {
    name = 'Taylor McArthur';
    email = 'tay@yahoo.com';
    address = {
        street: '1 taylor lane'
    }
}
