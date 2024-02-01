import { Component, Input } from '@angular/core';
import { Covid, CovidModel } from 'src/app/models/covid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() data: Covid[] = [];
  headers = Object.keys(new CovidModel());
}
