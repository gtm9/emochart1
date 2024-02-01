import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { EmotionData, EmotionDataService } from 'src/app/services/emotion-services/emotion-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-race.component.html',
  styleUrls: ['./bar-race.component.css']
})
export class BarRaceComponent {

  emoCount!: number;

  chart!: Highcharts.Chart;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Emotions'
    },
    xAxis: {
      categories: ['emo list']
    },
    yAxis: {
      title: {
        text: 'emotion'
      }
    },
    series: [
      {
        name: "this.name1",
        type: "spline",
        data: ["this.data1"]
      }
    ]
  };

  
  
  yAxisEmoData: { name: string; color: string; y: number; }[] = [];
  emotionData!: EmotionData;
  categoryData: Array<string> = [];
  yAxisChartData: { name: string; color: string; y: number; }[] = [];

  public constructor(public emotionDataService: EmotionDataService) {  }
  
  ngOnInit(): void {
    this.chart = Highcharts.chart('highcharts-container', this.chartOptions);

    // this.chartOptions = {
    //   chart: {
    //       type: 'bar'
    //   },
    //   title: {
    //       text: 'Emotion',
    //       align: 'left'
    //   },
    //   subtitle: {
    //       text: 'Source: <a ' +
    //           'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
    //           'target="_blank">Wikipedia.org</a>',
    //       align: 'left'
    //   },
    //   xAxis: {
    //     categories: ['Data1','Data2','Data3','Data4','Data5','Data6',],
    //       title: {
    //           text: null
    //       },
    //       gridLineWidth: 1,
    //       lineWidth: 0
    //   },
    //   yAxis: {
    //       min: 0,
    //       title: {
    //           text: 'ranking',
    //           align: 'high'
    //       },
    //       labels: {
    //           overflow: 'justify'
    //       },
    //       gridLineWidth: 0
    //   },
    //   tooltip: {
    //       valueSuffix: ' millions'
    //   },
    //   plotOptions: {
    //       bar: {
    //           borderRadius: '50%',
    //           dataLabels: {
    //               enabled: true
    //           },
    //           groupPadding: 0.1,
    //           colorByPoint: true
    //       }
    //   },
    //   credits: {
    //       enabled: false
    //   },
    //   series: [{
    //     data: [
    //         {
    //           name: 'Point 1',
    //           color: '#00FF00',
    //           y: 1
    //         }, {
    //           name: 'Point 2',
    //           color: '#FF00FF',
    //           y: 5
    //         }, {
    //           name: 'Point 2',
    //           color: '#FF00FF',
    //           y: 5
    //         },
    //       ]
    //     }
    //   ]
    // }

    // getting the emotion data
    this.emotionDataService.getEmotionData().subscribe(res => {
      this.emotionData = res;
      this.emotionData.emotions.sort((e1, e2) => e2.rating - e1.rating);
      this.emoCount = this.emotionData.count[0];
      console.log('emotionData',this.emotionData);

      // constructing the category array
      this.constructChartData()
      // console.log('category', this.categoryData);

      this.updateChart(10);
      // console.log(this.chartOptions.series)
    });

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resolve')
      );
    }, 300)
  }

  updateChart(yExtreme: number) {
    console.log('yAxisChartData',this.yAxisChartData[9])

    this.yAxisChartData.sort((e1, e2) => e2.y - e1.y);

    // console.log('this.chartX',this.chart.xAxis[0].setExtremes);
    // console.log('this.chartY',this.chart.yAxis);

    // Update the chart's series data with new data
    this.chart.update({
      xAxis: {
        categories: this.categoryData,
          title: {
              text: null
          },
          gridLineWidth: 0,
          lineWidth: 0
      },
      series: [
        {
          name: "Emotion",
          type: "bar",
          data: this.yAxisChartData
        }
      ]
    });
  }

  showMore() {
    console.log('showMore')
    this.yAxisChartData.map(emo => {
      this.yAxisEmoData.push(emo)
    })
    this.chart.update({
      series: [
        {
          name: "Emotion",
          type: "bar",
          data: this.yAxisEmoData
        }
      ]
    })
  }

  showLess() {
    console.log('showLess')
  }

  constructChartData() {
    console.log('emotionData',this.emotionData);
    this.emotionData.emotions.map(emotion => {
      this.categoryData.push(emotion.emotion);
      this.yAxisChartData.push({
        name: emotion.emotion,
        color: emotion.color,
        y: emotion.rating,
      })
    })
  }

}
