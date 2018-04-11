import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryItemComponent } from './repository-item/repository-item.component';
import { RcsService } from './rcs.service';
import { SearchPipe } from './search.pipe';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    SearchPipe,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [EditDialogComponent],
  providers: [RcsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
