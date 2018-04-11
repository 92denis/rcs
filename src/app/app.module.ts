import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RcsService } from './rcs.service';
import { RepositoryItemComponent } from './repository-item/repository-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule
    ],
  providers: [RcsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
