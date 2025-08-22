import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }



  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

    }

  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getCurrentSection(): string {
    const sections = ['home', 'about', 'skills', 'project', 'certificates', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }
    return 'home';
  }

}
