import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Issue } from '../issue';
import { RcsService } from '../rcs.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  name: string;
  subscription: Subscription;
  issues: Issue[];

  constructor(private activateRoute: ActivatedRoute, private rcsServise: RcsService) {
    this.subscription = this.activateRoute.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit() {
    this.rcsServise.getIssues(this.name).subscribe(issues => this.issues = issues);
  }

}
