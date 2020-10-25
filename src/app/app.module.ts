import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './components/navigation/navigation.component';
import { OperationsFormComponent } from './components/operations-form/operations-form.component';
import { OperationsListComponent } from './components/operations-list/operations-list.component';

import { OperationsService } from './service/operations.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OperationsFormComponent,
    OperationsListComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [OperationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
