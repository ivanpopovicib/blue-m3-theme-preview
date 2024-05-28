import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type TailwindClassCategory = 'bg' | 'text';

type TailwindClassName = `${TailwindClassCategory}-${string}`;

@Component({
  selector: 'app-container',
  standalone: true,
  template: `
    <div class="flex gap-2.5 items-center justify-between p-8 flex-wrap">
      <h6 class="!mb-0">{{ bg() }}</h6>
      <h6 class="!mb-0">{{ color() }}</h6>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  bg = input.required<TailwindClassName>();
  color = input.required<TailwindClassName>();
}
