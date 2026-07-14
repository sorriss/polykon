import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly languageService = inject(LanguageService);

  protected readonly isBookingOpen = signal(false);
  protected readonly language = this.languageService.language;

  protected readonly navigation = [
    { path: '', key: 'nav.home' },
    { path: 'about', key: 'nav.about' },
    { path: 'projects', key: 'nav.projects' },
    { path: 'contacts', key: 'nav.contacts' },
  ];

  protected text(key: string): string {
    return this.languageService.t(key);
  }

  protected setLanguage(language: 'ua' | 'en'): void {
    this.languageService.setLanguage(language);
  }

  protected openBooking(): void {
    this.isBookingOpen.set(true);
  }

  protected closeBooking(): void {
    this.isBookingOpen.set(false);
  }
}
