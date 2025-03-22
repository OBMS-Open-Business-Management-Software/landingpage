import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPrivacyPolicyHeroComponent } from './hero/hero.component';
import { LegalPrivacyPolicyContentComponent } from './content/content.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'obms-legal-privacy-policy',
  imports: [
    CommonModule,
    LegalPrivacyPolicyHeroComponent,
    LegalPrivacyPolicyContentComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class LegalPrivacyPolicyComponent implements OnInit {
  title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Privacy policy | OBMS');
  }
}
