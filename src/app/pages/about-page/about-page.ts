import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-page',
  imports: [NgOptimizedImage],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  private readonly languageService = inject(LanguageService);

  protected text(key: string): string {
    return this.languageService.t(key);
  }
}
