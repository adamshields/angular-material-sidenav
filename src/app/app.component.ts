import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { ResponsiveService } from './services/responsive.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'breaker19er';

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

//   responsiveService = inject(ResponsiveService);

//   sideNavMenuMode = computed(() => {
//     if (this.responsiveService.largeWidth()) {
//       return 'side';
//     }
//     return 'over';
//   })

//   mainSideNavMenuMode = computed(() => {
//     if (this.responsiveService.smallWidth()) {
//       return 'over';
//     }
//     return 'side';
//   })
}
