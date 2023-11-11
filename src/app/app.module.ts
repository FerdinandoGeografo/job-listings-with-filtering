import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsFilterBoxComponent } from './components/jobs-filter-box/jobs-filter-box.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobsFilterBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
