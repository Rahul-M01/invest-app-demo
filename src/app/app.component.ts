import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <app-results></app-results>
    `,
    styleUrls: []
})
export class AppComponent {
    title = 'startup';
}
