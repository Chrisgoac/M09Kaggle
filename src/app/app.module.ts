import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/container/table/table.component';
import { ColumnsComponent } from './components/container/columns/columns.component';
import { CircularComponent } from './components/container/circular/circular.component';
import { GeographComponent } from './components/container/geograph/geograph.component';
import { FormComponent } from './components/container/form/form.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColumnsComponent,
    CircularComponent,
    GeographComponent,
    FormComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
