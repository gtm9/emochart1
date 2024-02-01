import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as Dashboards from '@highcharts/dashboards/dashboards';
import HighchartsPlugin from '@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart: { name: string; type: string; data: number[]; }[] = [];
  cards: number[] = [];
  constructor(private dashboardService: DashboardService) { }

  

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();

    HighchartsPlugin.custom.connectHighcharts(Highcharts);
  }

}
