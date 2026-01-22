import { Component } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
  `
})
export class AppComponent {

  message = 'Loading...';

  constructor(private api: Api) {
    this.api.getHello().subscribe({
      next: (res) => this.message = res,
      error: (err) => {
        console.error(err);
        this.message = 'Backend call failed';
      }
    });
  }
}
