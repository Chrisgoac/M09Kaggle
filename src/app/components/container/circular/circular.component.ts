import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CsvService } from '../../../services/csv.service'; // Asegúrate de proporcionar la ruta correcta
import { Chart } from 'chart.js/auto';
import { Covid } from 'src/app/models/covid';
import { ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})

export class CircularComponent implements OnInit {
  @ViewChild('circularChart', { static: true }) myChart!: ElementRef;

  @Input() data: any[] | undefined;
  csvData: Covid[] = [];
  chartInstance: Chart | undefined;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.parsedData$.subscribe(parsedData => {
      this.csvData = parsedData;
      this.drawCircularChart();
    });
  }

  ngOnDestroy() {
    // Destruir el gráfico antes de que el componente se destruya
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
  
  private drawCircularChart() {
    const canvas: HTMLCanvasElement = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');
  
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    // Extracción de datos específicos (ajusta según tus necesidades)
    const labels = this.csvData.map(item => item.country).slice(0, 10);
    const data = this.csvData.map(item => item.totalCases).slice(0, 10);
  
    // Configuración del gráfico
    const config: ChartConfiguration = {
      type: 'pie', // Tipo de gráfico circular (donut)
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(200, 106, 27, 0.7)',
            'rgba(235, 28, 27, 0.7)',
            'rgba(67, 99, 67, 0.7)',
          ],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  
    // Crear el gráfico
    this.chartInstance = new Chart(ctx as any, config as any)
  }

}
