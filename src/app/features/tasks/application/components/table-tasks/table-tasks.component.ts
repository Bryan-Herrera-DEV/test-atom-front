import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
  TrackByFunction,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { BrnSelectModule } from '@spartan-ng/ui-select-brain';
import { HlmSelectModule } from '@spartan-ng/ui-select-helm';
import {
  BrnTableModule,
  PaginatorState,
  useBrnColumnManager,
} from '@spartan-ng/ui-table-brain';
import { HlmTableModule } from '@spartan-ng/ui-table-helm';
import { NoDataComponent } from '../../../../../shared/application/components/no-data/no-data.component';
import { TaskProps } from '../../../domain/Task';

@Component({
  selector: 'app-table-tasks',
  standalone: true,
  imports: [
    FormsModule,
    BrnSelectModule,
    HlmSelectModule,
    BrnTableModule,
    HlmTableModule,
    TitleCasePipe,
    NoDataComponent,
    HlmButtonDirective,
    DatePipe,
    ReactiveFormsModule,
    HlmScrollAreaComponent
  ],
  templateUrl: './table-tasks.component.html',
  styleUrl: './table-tasks.component.scss',
})
export class TableTasksComponent implements OnChanges {
  @Input() tasks: TaskProps[] = [];

  constructor() {
    effect(
      () => {
        this._displayedIndices();
        this.onChangeLogicRun()
      },
      {
        allowSignalWrites: true,
      },
    );
  }

  private readonly onChangeLogicRun = () => {
    this._filteredTasks.set(
      [...this.tasks].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }),
    );
    const getFilterd = () => {
      const start = this._displayedIndices().start;
      const end = this._displayedIndices().end + 1;
      const toFilter = this._filteredTasks();
      return [...toFilter].slice(start, end);
    };
    this._filteredSortedPaginatedTasks.set(getFilterd());

    this._totalElements.set(this._filteredTasks().length);
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      this.onChangeLogicRun();
    }
  }

  private readonly _filteredTasks = signal<TaskProps[]>([]);

  /* Paginator Controls */
  private readonly _displayedIndices = signal({ start: 0, end: 0 });
  protected readonly _availablePageSizes = [10, 15, 25, 100];
  protected readonly _pageSize = signal(this._availablePageSizes[0]);

  protected readonly _trackBy: TrackByFunction<TaskProps> = (
    _: number,
    p: TaskProps,
  ) => p.id;

  protected readonly _totalElements = signal<number>(0);

  protected readonly _onStateChange = ({
    startIndex,
    endIndex,
  }: PaginatorState) =>
    this._displayedIndices.set({ start: startIndex, end: endIndex });
  /* Paginator Controls */

  protected readonly _filteredSortedPaginatedTasks = signal<TaskProps[]>([]);

  protected readonly _brnColumnManager = useBrnColumnManager({
    title: { visible: true, label: 'Titulo' },
    description: { visible: true, label: 'Descripcion' },
    createdAt: { visible: true, label: 'Fecha de creacion' },
  });

  protected readonly _allDisplayedColumns = computed(() => [
    ...this._brnColumnManager.displayedColumns(),
    // 'actions',
  ]);
}
