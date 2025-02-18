import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
	ViewEncapsulation,
	booleanAttribute,
	inject,
	signal,
} from '@angular/core';

let collapsibleContentIdSequence = 0;
export type BrnCollapsibleState = 'open' | 'closed';

@Component({
	selector: 'brn-collapsible',
	standalone: true,
	host: {
		'[attr.data-state]': 'state()',
		'[attr.disabled]': 'collapsibleDisabled()',
	},
	template: `
		<ng-content />
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BrnCollapsibleComponent {
	private _cdr = inject(ChangeDetectorRef);
	state = signal<BrnCollapsibleState>('closed');
	contentId = signal(`brn-collapsible-content-${collapsibleContentIdSequence++}`);

	private readonly _disabled = signal<true | undefined>(undefined);
	@Input({ transform: booleanAttribute })
	set disabled(value: boolean) {
		this._disabled.set(value ? true : undefined);
	}

	// output del estado del collapsible
	@Output() stateChange = new EventEmitter<BrnCollapsibleState>();

	collapsibleDisabled = this._disabled.asReadonly();

	public toggle() {
		const newState = this.state() === 'closed' ? 'open' : 'closed';
		this.state.set(newState);
		this._cdr.detectChanges();
		this.stateChange.emit(newState);
	}
}
