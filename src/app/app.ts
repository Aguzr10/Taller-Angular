import { Component, signal } from '@angular/core';
import { SeriesTable } from './components/series-table/series-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [SeriesTable],
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mynewapp');
}
