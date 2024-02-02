import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Covid } from 'src/app/models/covid';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  private _fileContentSubject = new BehaviorSubject<string | null>(null);
  fileContent$ = this._fileContentSubject.asObservable();
  parsedData$ = new BehaviorSubject<Covid[]>([]);

  loadCsvData(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string;
      this._fileContentSubject.next(fileContent);
      this.parseCsvData(fileContent);
    };

    reader.readAsText(file);
  }

  private parseCsvData(csvContent: string) {
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',');

    const parsedData: Covid[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const covidData: Covid = {} as Covid;

      for (let j = 0; j < headers.length && values.length; j++) {
        const key = headers[j].trim() as keyof Covid;
        covidData[key] = values[j].trim() as never;
      }

      parsedData.push(covidData);
    }

    console.log('Parsed Data:', parsedData);
    this.parsedData$.next(parsedData);
  }
}
