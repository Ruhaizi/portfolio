import { Component } from '@angular/core';


@Component({
  selector: 'app-profile-summary',
  standalone: true,
  imports: [],
  templateUrl: './profile-summary.component.html',
  styleUrl: './profile-summary.component.css'
})
export class ProfileSummaryComponent {
  name = 'Ruhaizi Mopuri';
  tagline = 'Software Developer';
  imageSrc = 'girl_profile_yellow.svg';
}
