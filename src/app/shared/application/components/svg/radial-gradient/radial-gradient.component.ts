import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radial-gradient',
  standalone: true,
  imports: [],
  templateUrl: './radial-gradient.component.html',
  styleUrl: './radial-gradient.component.scss',
})
export class RadialGradientComponent {
  @Input() widthClass: string = 'w-full';
  @Input() heightClass: string = 'h-auto';
}
