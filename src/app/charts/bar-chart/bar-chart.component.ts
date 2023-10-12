import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from '../charts.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent extends ChartBaseComponent {

  public constructor(public override service: ChartsService) {
    super(service);
  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
      data: {
        // values on X-Axis
        labels: labeldata,
        datasets: [
          {
            barPercentage: 0.8,
            label: 'Emotions',
            data: realdata,
            backgroundColor: colordata,
            grouped: true,
            barThickness: 20,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        aspectRatio: 2,
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        scales: {
          x: {
            suggestedMin: 0,
            suggestedMax: 10
          }
      }
      },
    });
  }
}
