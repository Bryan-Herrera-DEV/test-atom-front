import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface StateChangeContext {
  $implicit: string;
  state: string;
}

@Directive({
  selector: '[stateChange]',
  standalone: true,
})
export class BrnCollapsibleStateDirective {
  private context: StateChangeContext = {
    $implicit: 'closed',
    state: 'closed',
  };

  constructor(
    private templateRef: TemplateRef<StateChangeContext>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set stateChange(state: string) {
    this.context.$implicit = state;
    this.context.state = state;
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
}
