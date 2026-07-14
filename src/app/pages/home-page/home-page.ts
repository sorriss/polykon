import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly languageService = inject(LanguageService);

  protected text(key: string): string {
    return this.languageService.t(key);
  }
}
