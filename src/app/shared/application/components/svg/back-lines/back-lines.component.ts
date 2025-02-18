import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-lines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-lines.component.html',
  styleUrl: './back-lines.component.scss',
})
export class BackLinesComponent {
  @Input() widthClass: string = 'w-full';
  @Input() heightClass: string = 'h-auto';
}
