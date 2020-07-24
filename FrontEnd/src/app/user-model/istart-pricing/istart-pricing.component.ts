import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResponsiveService } from '../../_services/responsive.service';

@Component({
  selector: 'app-istart-pricing',
  templateUrl: './istart-pricing.component.html',
  styleUrls: ['./istart-pricing.component.css']
})
export class IstartPricingComponent implements OnInit {

  constructor(
    private router: Router,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
  }

}
