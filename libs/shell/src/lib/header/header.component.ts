import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ScrollToDirective } from '@landingpage/directives';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'obms-header',
  imports: [CommonModule, RouterModule, ScrollToDirective],
  providers: [ScrollToDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activatedRoute = inject(ActivatedRoute);
  httpClient = inject(HttpClient);
  scrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset || document.documentElement.scrollTop;

    this.scrolled = scrollOffset > 0;
  }
}
