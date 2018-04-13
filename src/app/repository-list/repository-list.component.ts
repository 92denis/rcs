import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RcsService } from '../rcs.service';

@Component({
  selector: 'repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {

  repositories: Repository[] = [];
  languagesSearch: string;

  constructor(private rcsService: RcsService) {
    this.languagesSearch = '';
  }

  deleteRepo(id) {
    this.repositories = this.repositories.filter(repo => repo.id !== id);
  }

  ngOnInit(): void {
    this.rcsService.getRepositories().subscribe(data => this.repositories = data );
  }

}
