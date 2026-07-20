import { Injectable } from '@angular/core';

export type BookingPayload = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  area: string;
  description: string;
  date: Date | null;
  time: Date | null;
};

@Injectable({ providedIn: 'root' })
export class BookingEmailService {
  private readonly recipient = 'poleykon@gmail.com';

  send(payload: BookingPayload): void {
    const normalizedDate = payload.date ? this.formatDate(payload.date) : '-';
    const normalizedTime = payload.time ? this.formatTime(payload.time) : '-';

    const lines = [
      `Full name: ${payload.fullName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || '-'}`,
      `Location: ${payload.location}`,
      `Approximate area: ${payload.area || '-'}`,
      `Description: ${payload.description || '-'}`,
      `Date: ${normalizedDate}`,
      `Time: ${normalizedTime}`,
    ];

    const subject = encodeURIComponent('Booking consultation request');
    const body = encodeURIComponent(lines.join('\n'));
    const gmailComposeUrl =
      `https://mail.google.com/mail/u/0/?fs=1&tf=cm` +
      `&to=${encodeURIComponent(this.recipient)}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailComposeUrl, '_blank');
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  private formatTime(time: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(time);
  }
}
