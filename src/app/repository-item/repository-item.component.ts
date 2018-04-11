import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Repository } from '../repository';
import { RcsService } from '../rcs.service';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repo: Repository;
  @Output() deleteRepo = new EventEmitter();

  constructor(private rcsService: RcsService, public dialog: MatDialog) {
  }

  delete(id) {
    this.deleteRepo.emit(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: this.repo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.repo = result;
    });
  }

  ngOnInit() {

  }

}
