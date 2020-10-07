import { Currencies } from '@Enums/currencies.enum';
import { Option } from '@Models/option.model';

export const CURRENCY_OPTIONS: Option<Currencies>[] = [
  { label: '$', value: Currencies.Usd },
];
