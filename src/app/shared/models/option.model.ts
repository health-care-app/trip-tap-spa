export interface Option<T> {
  label: string;
  value: T | null;
}

export type DropdownOption<T> = Option<T>;

export interface MultiSelectOption<T> extends Option<MultiSelectOptionValue<T>> {
  selected?: boolean;
}

export type MultiSelectOptionValue<T> = Option<T>;
