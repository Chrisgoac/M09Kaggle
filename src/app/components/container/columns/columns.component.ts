import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CsvService } from '../../../services/csv.service'; // Asegúrate de proporcionar la ruta correcta
import { Chart } from 'chart.js/auto';
import { Covid } from 'src/app/models/covid';
import { ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})

export class ColumnsComponent implements OnInit {
  @ViewChild('columnsChart', { static: true }) myChart!: ElementRef;

  @Input() data: any[] | undefined;
  csvData: Covid[] = [];
  chartInstance: Chart | undefined;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.parsedData$.subscribe(parsedData => {
      this.csvData = parsedData;
      this.drawBarChart();
    });
  }

  ngOnDestroy() {
    // Destruir el gráfico antes de que el componente se destruya
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
  
  private drawBarChart() {
    const canvas: HTMLCanvasElement = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');
  
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  
    // Extracción de datos específicos (ajusta según tus necesidades)
    const labels = this.csvData.map(item => item.country).slice(0, 10);
    const data = this.csvData.map(item => item.totalCases).slice(0, 10);
  
    // Configuración del gráfico de barras
    const config: ChartConfiguration = {
      type: 'bar', // Cambiado a tipo de gráfico de barras
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Cases',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.7)', // Puedes cambiar el color de fondo
          borderColor: 'rgba(54, 162, 235, 1)', // Puedes cambiar el color del borde
          borderWidth: 1, // Ancho del borde
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          }
        },
      },
    };
  
    // Crear el gráfico de barras
    this.chartInstance = new Chart(ctx as any, config as any);
  }
  

}
