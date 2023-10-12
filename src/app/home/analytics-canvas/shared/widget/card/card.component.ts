import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data: number[] = [];
  
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60,
      },
      title: {
          text: null,
          align: 'left'
      },
      subtitle: {
          text: null,
      },
      tooltip: {
          split: true,
          outside: true,
      },
      legend: {
        enabled: true,
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        labels: {
            enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      series: [{
        name: 'Ocean transport',
        type: 'area',
        data: this.data
      }]
  }

  HC_exporting(this.Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resolve')
    );
  }, 300)
  }
}
