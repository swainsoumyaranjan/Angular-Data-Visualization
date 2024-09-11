import { Component, Input, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
})
export class ViewDataComponent implements OnChanges {
  @Input() data: { datetime: string, temperature: number }[] = [];

  chartLabels: string[] = [];
  chartData = [{ data: [], label: 'Temperature' }];
  chartOptions: ChartOptions = {
    responsive: true
  };

  ngOnChanges() {
    this.chartLabels = this.data.map(item => new Date(item.datetime).toLocaleString());
    //this.chartData[0].data = this.data.map(item => item.temperature);
  }
}
