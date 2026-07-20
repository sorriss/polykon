import { Component, computed, inject, output, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { BookingEmailService } from '../../services/booking-email.service';

@Component({
  selector: 'app-booking-modal',
  imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatTimepickerModule, ReactiveFormsModule],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.scss',
})
export class BookingModal {
  private readonly languageService = inject(LanguageService);
  private readonly bookingEmailService = inject(BookingEmailService);
  private readonly fb = inject(FormBuilder);

  protected readonly closed = output<void>();
  protected readonly submitted = output<void>();

  protected readonly step = signal<1 | 2>(1);
  protected readonly isSuccess = signal(false);
  protected readonly progress = computed(() => (this.step() === 1 ? 50 : 100));
  protected readonly bookingForm = this.fb.group({
    fullName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    location: ['', Validators.required],
    area: [''],
    description: [''],
    date: [null as Date | null, Validators.required],
    time: [null as Date | null, Validators.required],
  });

  protected text(key: string): string {
    return this.languageService.t(key);
  }

  protected close(): void {
    this.closed.emit();
    this.bookingForm.reset();
    this.isSuccess.set(false);
    this.step.set(1);
  }

  protected back(): void {
    this.step.set(1);
  }

  protected next(): void {
    this.bookingForm.controls.fullName.markAsTouched();
    this.bookingForm.controls.phone.markAsTouched();
    this.bookingForm.controls.location.markAsTouched();
    if (
      this.bookingForm.controls.fullName.invalid ||
      this.bookingForm.controls.phone.invalid ||
      this.bookingForm.controls.location.invalid ||
      this.bookingForm.controls.email.invalid
    ) {
      return;
    }
    this.step.set(2);
  }

  protected submit(): void {
    this.bookingForm.controls.date.markAsTouched();
    this.bookingForm.controls.time.markAsTouched();
    if (this.bookingForm.invalid) {
      return;
    }

    this.bookingEmailService.send({
      fullName: this.bookingForm.controls.fullName.value ?? '',
      phone: this.bookingForm.controls.phone.value ?? '',
      email: this.bookingForm.controls.email.value ?? '',
      location: this.bookingForm.controls.location.value ?? '',
      area: this.bookingForm.controls.area.value ?? '',
      description: this.bookingForm.controls.description.value ?? '',
      date: this.bookingForm.controls.date.value,
      time: this.bookingForm.controls.time.value,
    });

    this.submitted.emit();
    this.isSuccess.set(true);
  }

  protected hasError(controlName: keyof typeof this.bookingForm.controls): boolean {
    const control = this.bookingForm.controls[controlName];
    return control.touched && control.invalid;
  }
}
