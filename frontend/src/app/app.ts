import { Component, OnInit } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ message }}</h1>
  `
})
export class App implements OnInit {

  message = 'Loading from backend...';

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getHello().subscribe({
      next: (res) => this.message = res,
      error: (err) => {
        console.error(err);
        this.message = 'Failed to reach backend';
      }
    });
  }
}

