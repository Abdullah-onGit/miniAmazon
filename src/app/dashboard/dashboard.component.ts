import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Categoery;
  SubCategoery;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(paramMap => {
      this.SubCategoery = paramMap.get('SubCategoery');
      this.Categoery = paramMap.get('Categoery');
    });
  }

}
