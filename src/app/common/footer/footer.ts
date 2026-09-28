import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { BookingModal } from '../booking-modal/booking-modal';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BookingModal],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  protected readonly isBookingOpen = signal(false);

  // Fill in profile URLs; items without a url render as plain text.
  protected readonly socials = [
    { label: 'Instagram', url: '' },
    { label: 'Telegram', url: '' },
    { label: 'Threads', url: '' },
    { label: 'Facebook', url: '' },
  ];

  protected text(key: string): string {
    return this.languageService.t(key);
  }

  protected openBooking(): void {
    this.isBookingOpen.set(true);
  }

  protected closeBooking(): void {
    this.isBookingOpen.set(false);
  }
}
