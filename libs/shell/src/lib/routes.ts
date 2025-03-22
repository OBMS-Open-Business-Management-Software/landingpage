import { Route } from '@angular/router';

import { HomeComponent } from '@landingpage/home';
import {
  LegalDisclosureComponent,
  LegalTermsOfUseComponent,
  LegalPrivacyPolicyComponent,
} from '@landingpage/legal';

import { ShellComponent } from './shell/shell.component';

export const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'legal',
        children: [
          {
            path: 'disclosure',
            component: LegalDisclosureComponent,
          },
          {
            path: 'terms-of-use',
            component: LegalTermsOfUseComponent,
          },
          {
            path: 'privacy-policy',
            component: LegalPrivacyPolicyComponent,
          },
        ],
      },
    ],
  },
];
