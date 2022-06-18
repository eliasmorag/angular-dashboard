
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent {
  single: any[] = [];
  multi: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }
}