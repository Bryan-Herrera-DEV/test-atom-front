import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { hlmH3, hlmP } from '@spartan-ng/ui-typography-helm';
import { UserInfoComponent } from '../../../../features/Users/application/components/user-info/user-info.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterModule, UserInfoComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  host: {
    class: 'w-full',
  },
})
export class DashboardLayoutComponent {
  hlmH3 = hlmH3;
  hlmP = hlmP;
}
