import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements AfterViewInit {
  @ViewChild('circularChart', { static: false }) barChart?: ElementRef;

  ngAfterViewInit() {
    if (this.barChart) {
      this.createBarChart();
    }
  }

  createBarChart() {
    Chart.register(...registerables);

    const ctx: CanvasRenderingContext2D = this.barChart!.nativeElement.getContext('2d');

    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [{
          label: 'Dataset 1',
          data: [10, 15, 7, 12, 5],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

