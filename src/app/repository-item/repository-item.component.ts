import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';
import { RcsService } from '../rcs.service';

@Component({
  selector: 'repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repo: Repository;
  repositories: Repository[];

  constructor(private rcsService: RcsService) { 
    this.rcsService.getRepository().subscribe(repo => this.repositories = repo);
  }

  getRepo() {
    this.rcsService.getRepository().subscribe(repo => this.repositories = repo);
  }

  delRepo() {
    for (let i = 0; i < this.repositories.length; i++) {
      if (this.repositories[i].id === this.repo.id) {
        this.repositories.splice(i, 1);
        break;
      }
    }
  }

  ngOnInit() {
    this.getRepo();
  }

}
