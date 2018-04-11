import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {
  @Input() repo: Repository;
  constructor() { }

  ngOnInit() {
  }

}
