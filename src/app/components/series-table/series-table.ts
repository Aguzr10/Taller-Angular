import { Component, OnInit } from '@angular/core';
import { Serie } from '../../serie';
import { series } from '../../data/series';

@Component({
  selector: 'app-series-table',
  templateUrl: './series-table.html',
  styleUrls: ['./series-table.css'],
  standalone: true            
})
export class SeriesTable implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  ngOnInit(): void {
    this.series = series;
    this.averageSeasons = this.getAverageSeasons();
  }

  getAverageSeasons(): number {
    const totalSeasons = this.series.reduce((total, s) => total + s.seasons, 0);
    return totalSeasons / this.series.length;
  }
}
