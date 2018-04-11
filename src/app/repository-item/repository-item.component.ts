import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import { Repository } from '../repository';
import { RcsService } from '../rcs.service';


@Component({
  selector: 'repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repo: Repository;
  @Output() deleteRepo = new EventEmitter();

  constructor(private rcsService: RcsService) { 
  }

  delete(id) {
   this.deleteRepo.emit(id);
  }

  ngOnInit() {

  }

}
