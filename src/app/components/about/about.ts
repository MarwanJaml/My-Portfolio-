import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  name = 'Marwan Aljaml';
  logo = 'assets/images/pc_logo2.jpg';

}
