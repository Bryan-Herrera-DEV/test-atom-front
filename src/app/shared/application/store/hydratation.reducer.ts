// hydration.reducer.ts
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState } from './AppState';

const STATE_KEY = 'appState';

export function hydrationMetaReducer(
  reducer: ActionReducer<AppState>,
): ActionReducer<AppState> {
  return (state, action) => {
    switch (action.type) {
      case INIT:
      case UPDATE: {
        const savedState = localStorage.getItem(STATE_KEY);
        if (savedState) {
          try {
            const parsed = JSON.parse(savedState) as AppState;
            return { ...state, ...parsed };
          } catch (e) {
            console.error('Error rehydrating state', e);
            return reducer(state, action);
          }
        }
        break;
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem(STATE_KEY, JSON.stringify(nextState));

    return nextState;
  };
}
