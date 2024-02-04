import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/container/table/table.component';
import { ColumnsComponent } from './components/container/columns/columns.component';
import { Columns2Component } from './components/container/columns2/columns2.component';
import { CircularComponent } from './components/container/circular/circular.component';
import { FormComponent } from './components/container/form/form.component';
import { ContainerComponent } from './components/container/container.component';
import { CsvService } from './services/csv.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColumnsComponent,
    CircularComponent,
    FormComponent,
    ContainerComponent,
    Columns2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [CsvService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
