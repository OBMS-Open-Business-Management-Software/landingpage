import {
  Component,
  inject,
  OnInit,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'landingpage';

  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.setFaviconBasedOnTheme();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  setFavicon(href: string) {
    let link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ||
      this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'icon');
    this.renderer.setAttribute(link, 'type', 'image/svg+xml');
    this.renderer.setAttribute(link, 'href', href);

    if (!link.parentElement) {
      this.renderer.appendChild(document.head, link);
    }
  }

  setFaviconBasedOnTheme() {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const updateFavicon = () => {
      this.setFavicon(
        darkModeMediaQuery.matches
          ? '/assets/images/favicon-light.logo.svg'
          : '/assets/images/favicon.logo.svg'
      );
    };

    updateFavicon();

    darkModeMediaQuery.addEventListener('change', updateFavicon);
  }
}
