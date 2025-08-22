import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact';
import { MakoComponent } from './components/mako/mako';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';

export const routes: Routes = [
    { path: '', redirectTo: '#home', pathMatch: 'full' },
    { path: '**', redirectTo: '#home' },
    { path: 'home', component: MakoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
];
