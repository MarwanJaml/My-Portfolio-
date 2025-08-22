import { Component } from '@angular/core';
import { Instagram } from 'lucide-angular';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-mako',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mako.html',
  styleUrl: './mako.scss'
})
export class MakoComponent {
  name = 'Marwan Aljaml';
  currentRole = 'Data Analyst';
  description = "I'm Skilled data analyst and fullstack web developer using ASP.NET Core and Angular,Ready to help your business to grow."
  profileImage = 'assets/images/profile.jpg';

  roles = ['Fullstack Web Developer', 'Data Analyst', 'Python Developer'];
  currentRoleIndex: number = 0;



  socialLinks = {
    whatsapp: 'https://web.whatsapp.com/',
    instagram: 'https://www.instagram.com/marwan.aljaml1?igsh=bXBmbjM4ZGkya3Fx',
    linkedIn: 'https://www.linkedin.com/in/marwan-aljaml-72129824b/',
    gitHub: 'https://github.com/MarwanJaml',

  };

  ngOnInit() {

    setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    }, 3000);
  }
  getCurrentRole(): string {
    return this.roles[this.currentRoleIndex];
  }

  scrollToSection() {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
