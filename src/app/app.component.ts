import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() dateOutput = new EventEmitter<string>();
  title = 'sapientTest';
}
