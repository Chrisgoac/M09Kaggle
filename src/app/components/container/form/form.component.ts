import { Component } from '@angular/core';
import { Covid, CovidModel } from 'src/app/models/covid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  mostrarBarraProgreso = false;
  progresoCarga = 0;
  file: any;
  fileContent: any;
  data: Covid[] = [];

  constructor() {}

  ngOnInit(): void {}

  uploadFile(event: any){
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.fileContent = e.target?.result;
        console.log('File Content:', this.fileContent);
        this.parseFile();
      };

      reader.readAsText(file);
    }
  }


  parseFile(){
    const rows = this.fileContent.split('\n');
    const headers = rows[0].split(',');
    console.log(headers);
  
    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      const covidData: Covid = new CovidModel();
      
      for (let j = 0; j < headers.length && rows.length > 1; j++) {
        const key = headers[j].trim() as keyof Covid;
        covidData[key] = values[j].trim() as never;
        // covidData[key] = this.convertToNumber(values[j].trim()) as never;
      }
      this.data.push(covidData);
    }
  
    console.log('Parsed Data:', this.data);
  }

  private convertToNumber(value: string): number {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : numericValue;
  }
}

