import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatButton],
  template: `
    <div class="flex flex-col gap-2.5">
      <div class="flex flex-wrap gap-2">
        <button mat-flat-button>Flat</button>
        <button mat-flat-button class="secondary-button">Flat</button>
        <button mat-flat-button class="tertiary-button">Flat</button>
        <button mat-flat-button class="warn-button">Flat</button>
        <button mat-flat-button class="tonal">Flat</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button mat-stroked-button>Stroked</button>
        <button mat-stroked-button class="secondary-button">Stroked</button>
        <button mat-stroked-button class="tertiary-button">Stroked</button>
        <button mat-stroked-button class="warn-button">Stroked</button>
        <button mat-stroked-button class="tonal">Stroked</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button mat-raised-button>Raised</button>
        <button mat-raised-button class="secondary-button">Raised</button>
        <button mat-raised-button class="tertiary-button">Raised</button>
        <button mat-raised-button class="warn-button">Raised</button>
        <button mat-raised-button class="tonal">Raised</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button mat-button>Basic</button>
        <button mat-button class="secondary-button">Basic</button>
        <button mat-button class="tertiary-button">Basic</button>
        <button mat-button class="warn-button">Basic</button>
        <button mat-button class="tonal">Basic</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button mat-button class="tonal">Tonal</button>
        <button mat-stroked-button class="tonal">Tonal Stroked</button>
        <button mat-flat-button class="tonal">Tonal Flat</button>
        <button mat-raised-button class="tonal">Tonal Raised</button>
      </div>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {}
