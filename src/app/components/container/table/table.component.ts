// table.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CsvService } from 'src/app/services/csv.service';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any[] | undefined;
  tableData: Covid[] = [];

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.parsedData$.subscribe(parsedData => {
      this.data = parsedData;
    });
  }
}