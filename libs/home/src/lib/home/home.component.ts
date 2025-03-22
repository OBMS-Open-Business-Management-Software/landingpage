import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './hero/hero.component';
import { HomeFeaturesComponent } from './features/features.component';
import { HomeComplianceComponent } from './compliance/compliance.component';
import { HomeHostingComponent } from './hosting/hosting.component';
import { HomeWhyComponent } from './why/why.component';
import { HomeIntegrationsComponent } from './integrations/integrations.component';
import { HomePricingComponent } from './pricing/pricing.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'obms-home',
  imports: [
    CommonModule,
    HomeComplianceComponent,
    HomeHeroComponent,
    HomeHostingComponent,
    HomeFeaturesComponent,
    HomeIntegrationsComponent,
    HomePricingComponent,
    HomeWhyComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('The open-source business management software | OBMS');
  }
}
