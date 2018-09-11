import { Component } from '@angular/core';
import { Backend } from './backend';
import { ResizedEvent } from 'angular-resize-event/resized-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cpx';

  constructor(private backend: Backend) {}
}
