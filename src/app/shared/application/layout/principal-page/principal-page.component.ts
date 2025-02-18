import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmToasterModule } from '@spartan-ng/ui-sonner-helm';
import { BackLinesComponent } from '../../components/svg/back-lines/back-lines.component';
import { RadialGradientComponent } from '../../components/svg/radial-gradient/radial-gradient.component';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  host: {
    class: 'relative flex min-h-screen h-full flex-col overflow-hidden',
  },
  imports: [HlmToasterModule, RouterModule, BackLinesComponent, RadialGradientComponent],
  providers: [],
  styles: `
    .fallback-img {
      filter: opacity(0.3);
    }
  `,
  templateUrl: './principal-page.component.html',
})
export class PrincipalPageComponent {}
