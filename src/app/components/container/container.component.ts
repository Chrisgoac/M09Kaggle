import { Component } from '@angular/core';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  title = 'plots';
  currentData: Covid[] = [];

  getData(data: Covid[]) {
    this.currentData = data;
  }

}
