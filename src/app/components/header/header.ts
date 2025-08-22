import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'home';
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;


  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
    this.updateActiveSection();
  }


  private updateActiveSection(): void {
    this.activeSection = this.scrollService.getCurrentSection();
  }
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(sectionId: string): void {
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Element found:', element);

    this.scrollService.scrollToSection(sectionId);
    this.isMobileMenuOpen = false;
  }
  scrollToTop(): void {
    this.scrollService.scrollToTop();
    console.log("activeSection", this.activeSection);
  }

}
