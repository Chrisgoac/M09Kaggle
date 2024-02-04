// columns.component.ts
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Covid } from 'src/app/models/covid';
import { ChartConfiguration, registerables } from 'chart.js';
import { CsvService } from 'src/app/services/csv.service';

Chart.register(...registerables);

@Component({
  selector: 'app-columns2',
  templateUrl: './columns2.component.html',
  styleUrls: ['./columns2.component.css']
})
export class Columns2Component implements OnInit {
  @ViewChild('columns2Chart', { static: true }) myChart!: ElementRef;

  @Input() data: any[] | undefined;
  csvData: Covid[] = [];
  chartInstance: Chart | undefined;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.parsedData$.subscribe(parsedData => {
      this.csvData = parsedData;
      this.drawColumnChart();
    });
  }

  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  private drawColumnChart() {
    const canvas: HTMLCanvasElement = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const labels = this.csvData.map(item => item.country).slice(0, 5);
    const population = this.csvData.map(item => item.totalDeaths).slice(0, 5);
    const activeCases = this.csvData.map(item => item.totalRecovered).slice(0, 5);

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total muertos',
            data: population,
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            yAxisID: 'left-y-axis',
          },
          {
            label: 'Total recuperados',
            data: activeCases,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            yAxisID: 'right-y-axis',
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false,
            position: 'left', // Eje Y izquierdo
            // id: 'left-y-axis',
          },
          y: {
            stacked: false,
            position: 'right', // Eje Y izquierdo
            // id: 'right-y-axis',
          },
        },
      },
    };

    this.chartInstance = new Chart(ctx as any, config as any);
  }
}
