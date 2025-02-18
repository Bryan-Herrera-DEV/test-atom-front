import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'no-data-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-data-image.component.html',
  styleUrl: './no-data-image.component.scss',
})
export class NoDataImageComponent {
  @Input() widthClass: string = 'w-full';
  @Input() heightClass: string = 'h-auto';
}
