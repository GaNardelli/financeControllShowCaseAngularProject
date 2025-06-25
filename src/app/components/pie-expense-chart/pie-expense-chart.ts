import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-pie-expense-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./pie-expense-chart.html",
  styleUrls: ["./pie-expense-chart.scss"]
})
export class PieExpenseChart {
  public chartOptions: Partial<ChartOptions> | any;
  // here the approach that i would take is to make a route in the backend that yould return the series and the labels as a object, making some sort
  // of GROUP BY category with a SUM(value) AS total_value in the query if it was in sequel to build the graph
  // so, just for the demonstration i will just hardcode the values
  series = [15,150,5];
  labels = ['Medicine','Supermarket','Transport'];
  constructor() {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: "donut",
        height: '400',
        width: '500',
        foreColor: 'white'
      },
      title : {
        text: 'Monthly Expenses',
        align: 'center',
        margin: 20,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#263238'
        }
      },
      labels: this.labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }
}
