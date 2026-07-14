import { Injectable, signal } from '@angular/core';

type Language = 'ua' | 'en';

const translations: Record<Language, Record<string, string>> = {
  ua: {
    'nav.home': 'Головна',
    'nav.about': 'Про мене',
    'nav.projects': 'Проєкти',
    'nav.contacts': 'Контакти',
    'booking.cta': 'Забронювати консультацію',
    'booking.title': 'Записатись на консультацію',
    'booking.name': 'Ім\'я',
    'booking.email': 'Email',
    'booking.comment': 'Коментар',
    'booking.cancel': 'Скасувати',
    'booking.submit': 'Надіслати запит',
    'home.title': 'Позачасові інтер\'єри для сучасних просторів',
    'home.subtitle': 'Елегантні, продумано створені інтер’єри, сформовані вишуканою естетикою та увагою до кожної деталі.',
    'home.cta.explore': 'Переглянути проєкти',
    'about.title': 'Про мене',
    'about.para1': 'Мене звати Костянтин Полей — дизайнер інтер\'єрів, архітектор і засновник Polykon. З 2016 року я спеціалізуюся на проєктуванні житлових та комерційних просторів: ресторанів, кафе, офісів, спортивних залів, приватних резиденцій і громадських середовищ.',
    'about.para2': 'Мій підхід базується на створенні емоції через простір. Кожен проєкт починається з атмосфери — відчуття світла, матеріалів, масштабу та того, як люди переживають простір — а потім продовжується осмисленою функціональністю та точним технічним виконанням.',
    'projects.title': 'Проєкти',
    'projects.subtitle': 'Кілька кейсів, якими я особливо пишаюся.',
    'projects.open': 'Відкрити проєкт',
    'project.back': '← До списку проєктів',
    'contacts.title': 'Контакти',
    'contacts.hours.label': 'Робочі години:',
    'contacts.hours.value': 'Понеділок – П\'ятниця\n09:00 – 18:00',
    'contacts.phone.label': 'Номер телефону:',
    'contacts.phone.value': '+38 (093) 556 5716\nTelegram/Viber/WhatsApp',
    'contacts.email.label': 'Email:',
    'contacts.email.value': 'poleykon@gmail.com',
    'contacts.address.label': 'Адреса студії:',
    'contacts.address.value': 'вул. Преображенська, 34, Одеса, Україна',
    'detail.notFound': 'Проєкт не знайдено.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contacts',
    'booking.cta': 'Book a consultation',
    'booking.title': 'Book a Consultation',
    'booking.name': 'Name',
    'booking.email': 'Email',
    'booking.comment': 'Comment',
    'booking.cancel': 'Cancel',
    'booking.submit': 'Send Request',
    'home.title': 'Timeless interiors for modern spaces',
    'home.subtitle': 'Elegant, thoughtfully curated interiors shaped through refined aesthetics and intentional design.',
    'home.cta.explore': 'Explore projects',
    'about.title': 'About me',
    'about.para1': 'My name is Constantine Polei — an interior designer, architect, and founder of Polykon. Since 2016, I have been specializing in the design of residential and commercial spaces, including restaurants, cafés, offices, gyms, private residences, and public environments.',
    'about.para2': 'My approach is rooted in creating emotion through space. Every project begins with atmosphere — the feeling of light, materials, scale, and the way people experience a space — followed by thoughtful functionality and precise technical execution.',
    'projects.title': 'Projects',
    'projects.subtitle': 'A few cases I am especially proud of.',
    'projects.open': 'Open project',
    'project.back': '← Back to projects',
    'contacts.title': 'Contacts',
    'contacts.hours.label': 'Working hours:',
    'contacts.hours.value': 'Monday – Friday\n09:00 – 18:00',
    'contacts.phone.label': 'Contact number:',
    'contacts.phone.value': '+38 (093) 556 5716\nTelegram/Viber/WhatsApp',
    'contacts.email.label': 'Email:',
    'contacts.email.value': 'poleykon@gmail.com',
    'contacts.address.label': 'Studio address:',
    'contacts.address.value': '34 Preobrazhenska St., Odesa, Ukraine',
    'detail.notFound': 'Project not found.',
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<Language>('ua');

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  t(key: string): string {
    return translations[this.language()][key] ?? key;
  }
}
