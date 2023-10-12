import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.css'],
})
export class ChartBaseComponent implements OnInit {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];

  constructor(public service: ChartsService) {}

  ngOnInit(): void {
    this.service.getChart2Info().subscribe((response) => {
      this.chartInfo = response;
      console.log(this.chartInfo);
      if (this.chartInfo != null) {
        for (let i = 0; i < this.chartInfo.length; i++) {
          this.labeldata.push(this.chartInfo[i].emotion);
          this.realdata.push(this.chartInfo[i].value);
          this.colordata.push(this.chartInfo[i].color);
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  createChart(labeldata: any, realdata: any, colordata: any) {}
}
