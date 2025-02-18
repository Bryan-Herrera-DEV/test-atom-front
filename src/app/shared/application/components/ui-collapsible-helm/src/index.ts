import { NgModule } from '@angular/core';

import { BrnCollapsibleContentComponent } from './lib/brn-collapsible-content.component';
import { BrnCollapsibleTriggerDirective } from './lib/brn-collapsible-trigger.directive';
import { BrnCollapsibleComponent } from './lib/brn-collapsible.component';
import { BrnCollapsibleStateDirective } from './lib/brn-collapsible-state.directive';

export * from './lib/brn-collapsible-content.component';
export * from './lib/brn-collapsible-trigger.directive';
export * from './lib/brn-collapsible.component';
export * from './lib/brn-collapsible-state.directive';

export const BrnCollapsibleImports = [
	BrnCollapsibleComponent,
	BrnCollapsibleTriggerDirective,
	BrnCollapsibleContentComponent,
	BrnCollapsibleStateDirective
] as const;

@NgModule({
	imports: [...BrnCollapsibleImports],
	exports: [...BrnCollapsibleImports],
})
export class BrnCollapsibleModule {}
