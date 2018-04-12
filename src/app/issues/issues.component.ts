import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  name: string;
  subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {

    this.subscription = this.activateRoute.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit() {
  }

}
