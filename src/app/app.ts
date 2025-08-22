import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { MakoComponent } from './components/mako/mako';
import { ServicesComponent } from "./components/services/services";
import { FooterComponent } from "./components/footer/footer";
import { ResumeComponent } from "./components/resume/resume";
import { CertificatesComponent } from "./components/certificates/certificates";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MakoComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    CertificatesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('marwan-dev');
}
