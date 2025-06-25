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
  selector: 'app-column-income-expense-component',
  imports: [NgApexchartsModule],
  templateUrl: './column-income-expense-component.html',
  styleUrl: './column-income-expense-component.scss'
})
export class ColumnIncomeExpenseComponent {
  public chartOptions: Partial<ChartOptions> | any;
  // here the approach that i would take is to make a route in the backend that yould return the series and the labels as a object, making some sort
  // of GROUP BY category with a SUM(value) AS total_value in the query if it was in sequel to build the graph
  // so, just for the demonstration i will just hardcode the values
  series = [170, 3400];
  labels = ['Expenses','Income'];
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: '400',
        width: '400',
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      yaxis : {
        title: {text: 'USD'}
      },
      title : {
        text: 'Monthly Balance',
        align: 'center',
        margin: 20,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#263238'
        }
      },
      series: [{
        data: [{
          x: 'Expenses',
          y: 170
        }, {
          x: 'Income',
          y: 3400
        }]
      }]
    };
  }
}
