import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Serie } from '../../serie';
import { series } from '../../data/series';

@Component({
  selector: 'app-series-table',
  templateUrl: './series-table.html',
  styleUrls: ['./series-table.css'],
  standalone: true,
  imports: [CommonModule, DecimalPipe]
})
export class SeriesTable implements OnInit {
  series: Serie[] = [];
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  ngOnInit(): void {
    this.series = series;
    this.averageSeasons = this.getAverageSeasons();
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  getAverageSeasons(): number {
    const totalSeasons = this.series.reduce((total, s) => total + s.seasons, 0);
    return totalSeasons / this.series.length;
  }
}
