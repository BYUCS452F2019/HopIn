import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  mondayLines = [{ lat: 40.377084, lng: -111.796468 }, { lat: 40.250487, lng: -111.651618 }];
  tuesdayLines = [{ lat: 40.427585, lng: -111.871142 }, { lat: 40.367774, lng: -111.709817 }];
  tuesday2Lines = [{ lat: 40.509334, lng: -111.846377 }, { lat: 40.171846, lng: -111.609417 }];
  wednesdayLines = [{ lat: 40.416132, lng: -111.845733 }, { lat: 40.231192, lng: -111.694258 }];
  wednesday2Lines = [{ lat: 40.255404, lng: -111.655273 }, { lat: 40.025009, lng: -111.74513 }];
  wednesday3Lines = [{ lat: 40.025009, lng: -111.74513 }, { lat: 40.297319, lng: -111.715749 }];
  constructor() {}

  ngOnInit() {}
}
