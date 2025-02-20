import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoDataImageComponent } from '../svg/no-data-image/no-data-image.component';

@Component({
  selector: 'no-data',
  standalone: true,
  imports: [CommonModule, NoDataImageComponent],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss',
})
export class NoDataComponent {
}
