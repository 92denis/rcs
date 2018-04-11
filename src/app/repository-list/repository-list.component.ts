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

  constructor(private rcsService: RcsService) { }

  ngOnInit(): void {
    this.rcsService.getRepository().subscribe(data => { this.repositories = data; console.log(this.repositories); });
   }

}
