import { Directive, OnInit, Input } from '@angular/core';
import {Chart} from 'chart.js';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnInit {
  BarChart;
  @Input('appChart') labels: [''];
  @Input() data: [number];
  @Input() text: string;
  @Input() itemId: string;

  constructor() { }
  ngOnInit() {
    console.log(this.itemId)

    setTimeout(() => {
      this.BarChart = new Chart(this.itemId, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
              label: `${this.text}:`,
              data: this.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(73, 190, 187, 0.2)',
                  'rgba(150, 98, 255, 0.2)',
                  'rgba(245, 139, 62, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(73, 190, 187, 0.2)',
                  'rgba(150, 98, 255, 0.2)',
                  'rgba(245, 139, 62, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(73, 190, 187, 0.2)',
                  'rgba(150, 98, 255, 0.2)',
                  'rgba(245, 139, 62, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(73, 190, 187, 0.2)',
                  'rgba(150, 98, 255, 0.2)',
                  'rgba(245, 139, 62, 0.2)'
              ],
              borderWidth: 1
          }]
        },
        options: {
          title: {
              text: this.text,
              display: true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
      });
    }, 500);

  }

}
