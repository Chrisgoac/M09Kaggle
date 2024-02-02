import { Injectable } from '@angular/core';
import { CsvService } from './csv.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _fileContentSubject = new BehaviorSubject<string | null>(null);
  fileContent$ = this._fileContentSubject.asObservable();

  constructor(private csvService: CsvService) {}

  loadCsvData(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string;
      this._fileContentSubject.next(fileContent);
    };

    reader.readAsText(file);
  }
}