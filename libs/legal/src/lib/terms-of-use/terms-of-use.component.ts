import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalTermsOfUseHeroComponent } from './hero/hero.component';
import { LegalTermsOfUseContentComponent } from './content/content.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'obms-legal-terms-of-use',
  imports: [
    CommonModule,
    LegalTermsOfUseHeroComponent,
    LegalTermsOfUseContentComponent,
  ],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss',
})
export class LegalTermsOfUseComponent implements OnInit {
  title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Terms of use | OBMS');
  }
}
