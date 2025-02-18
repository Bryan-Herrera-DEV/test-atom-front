import {
  Directive,
  EventEmitter,
  Input,
  Output,
  computed,
  effect,
  input,
} from '@angular/core';
import { BrnAccordionItemDirective } from '@spartan-ng/ui-accordion-brain';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmAccordionItem],brn-accordion-item[hlm],hlm-accordion-item',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
  hostDirectives: [
    {
      directive: BrnAccordionItemDirective,
      inputs: ['isOpened'],
    },
  ],
})
export class HlmAccordionItemDirective {
  @Input() id: string = '';
  @Output() stateChange = new EventEmitter<{ id: string; state: string }>();

  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex flex-1 flex-col border-b border-border', this.userClass()),
  );

  constructor(private accordionItem: BrnAccordionItemDirective) {
    effect(() => {
      const state = this.accordionItem.state();
      this.stateChange.emit({ id: this.id, state });
    });
  }
}
