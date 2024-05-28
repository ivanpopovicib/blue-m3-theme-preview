import { Component } from '@angular/core';
import { ColorsComponent } from './colors.component';
import { ButtonsComponent } from './buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-1.5 flex gap-2.5 flex-col">
      <app-colors />
      <app-buttons />
    </div>
  `,
  imports: [ColorsComponent, ButtonsComponent],
})
export class PreviewComponent {}
