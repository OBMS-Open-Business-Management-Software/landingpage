import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToDirective } from '@landingpage/directives';

@Component({
  selector: 'obms-footer',
  imports: [CommonModule, RouterModule, ScrollToDirective],
  providers: [ScrollToDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
