import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from '../app.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() statistic: Statistic;
  constructor() {}

  ngOnInit(): void {}
}
