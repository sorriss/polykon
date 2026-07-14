import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contacs-page',
  imports: [],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
})
export class ContactsPage {
  private readonly languageService = inject(LanguageService);

  protected text(key: string): string {
    return this.languageService.t(key);
  }
}
