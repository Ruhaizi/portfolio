import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';

export const routes: Routes = [{ path: '', component: ProfileSummaryComponent, pathMatch: 'full' },

];
