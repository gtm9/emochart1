import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions = {};
  
  Highcharts = Highcharts;

  @Input() data: any = [];

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Greenhouse gases from Norwegian economic activity',
          align: 'left'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
              'target="_blank">SSB</a>',
          align: 'left'
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Million tonnes CO<sub>2</sub>-equivalents'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: this.data
  }

  HC_exporting(this.Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resolve')
    );
  }, 300)
  }

}
