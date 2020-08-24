import { Error } from '@Models/error.model';
import { State } from '@Models/store.model';

interface ErrorSelectors {
  selectError(state: State): Error;
}

export const errorSelectors: ErrorSelectors = {
  selectError: (state: State): Error => state.shared.error,
};
