import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from './container.component';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [ContainerComponent],
  template: `
    <div class="grid md:grid-cols-2 gap-2.5">
      <app-container
        bg="bg-primary"
        color="text-on-primary"
        class="text-on-primary bg-primary rounded-md"
      />
      <app-container
        bg="bg-primary-container"
        color="text-on-primary-container"
        class="text-on-primary-container bg-primary-container rounded-md"
      />
      <app-container
        bg="bg-primary-fixed"
        color="text-on-primary-fixed"
        class="text-on-primary-fixed bg-primary-fixed rounded-md"
      />
      <app-container
        bg="bg-primary-fixed-dim"
        color="text-on-primary-fixed-variant"
        class="text-on-primary-fixed-variant bg-primary-fixed-dim rounded-md"
      />
      <app-container
        bg="bg-secondary"
        color="text-on-secondary"
        class="text-on-secondary bg-secondary rounded-md"
      />
      <app-container
        bg="bg-secondary-container"
        color="text-on-secondary-container"
        class="text-on-secondary-container bg-secondary-container rounded-md"
      />
      <app-container
        bg="bg-error"
        color="text-on-error"
        class="text-on-error bg-error rounded-md"
      />
      <app-container
        bg="bg-error-container"
        color="text-on-error-container"
        class="text-on-error-container bg-error-container rounded-md"
      />
      <app-container
        bg="bg-tertiary"
        color="text-on-tertiary"
        class="text-on-tertiary bg-tertiary rounded-md"
      />
      <app-container
        bg="bg-error-tertiary"
        color="text-on-tertiary-container"
        class="text-on-tertiary-container bg-tertiary-container rounded-md"
      />
      <app-container
        bg="bg-surface"
        color="text-on-surface"
        class="text-on-surface bg-surface rounded-md"
      />
      <app-container
        bg="bg-surface-container"
        color="text-on-surface-variant"
        class="text-on-surface-variant bg-surface-container rounded-md"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {}
