import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex-wrapper">
      <button mat-button>Primary</button>
      <button mat-button class="secondary-button">Secondary</button>
      <button mat-button class="tertiary-button">Tertiary</button>
      <button mat-button class="warn-button">Warn</button>
    </div>
    <div class="flex-wrapper">
      <button mat-raised-button>Primary Raised</button>
      <button mat-raised-button class="secondary-button">
        Secondary Raised
      </button>
      <button mat-raised-button class="tertiary-button">Tertiary</button>
      <button mat-raised-button class="warn-button">Warn Raised</button>
    </div>
    <div class="flex-wrapper">
      <button mat-flat-button>Primary Flat</button>
      <button mat-flat-button class="secondary-button">Secondary Flat</button>
      <button mat-flat-button class="tertiary-button">Tertiary</button>
      <button mat-flat-button class="warn-button">Warn Flat</button>
    </div>
    <div class="flex-wrapper">
      <button mat-stroked-button>Primary Stroked</button>
      <button mat-stroked-button class="secondary-button">
        Secondary Stroked
      </button>
      <button mat-stroked-button class="tertiary-button">Tertiary</button>
      <button mat-stroked-button class="warn-button">Warn Stroked</button>
    </div>
    <div class="flex-wrapper">
      <button mat-button class="tonal">Tonal</button>
      <button mat-stroked-button class="tonal">Tonal Stroked</button>
      <button mat-flat-button class="tonal">Tonal Flat</button>
      <button mat-raised-button class="tonal">Tonal Raised</button>
    </div>
  `,
  imports: [MatButton],
  styles: `.flex-wrapper {
    display:flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }`,
})
export class PreviewComponent {}
