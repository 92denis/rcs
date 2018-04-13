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
  sort = true;
  buttonName: string;

  constructor(private rcsService: RcsService) {
    this.languagesSearch = '';
    this.buttonName = 'Sort descending';
  }

  deleteRepo(id) {
    this.repositories = this.repositories.filter(repo => repo.id !== id);
  }

  sortA_Z() {
    this.repositories.sort((a, b) => {
      if (this.sort) {
        this.buttonName = 'Sort descending';
        return +(a.name.toLowerCase() > b.name.toLowerCase()) || +(a.name.toLowerCase() === b.name.toLowerCase()) - 1;
      } else {
        this.buttonName = 'Sort ascending';
        return +(a.name.toLowerCase() < b.name.toLowerCase()) || +(a.name.toLowerCase() === b.name.toLowerCase()) - 1;
      }
    });

    this.sort = !this.sort;
  }

  ngOnInit(): void {
    this.rcsService.getRepositories().subscribe(data => this.repositories = data);
  }

}
