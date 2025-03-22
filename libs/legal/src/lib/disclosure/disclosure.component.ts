import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalDisclosureHeroComponent } from './hero/hero.component';
import { LegalDisclosureContentComponent } from './content/content.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'obms-legal-disclosure',
  imports: [
    CommonModule,
    LegalDisclosureHeroComponent,
    LegalDisclosureContentComponent,
  ],
  templateUrl: './disclosure.component.html',
  styleUrl: './disclosure.component.scss',
})
export class LegalDisclosureComponent implements OnInit {
  title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Legal disclosure | OBMS');
  }
}
