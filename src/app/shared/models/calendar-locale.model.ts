export interface CalendarLocales {
  [key: string]: CalendarLocale;
}

export interface CalendarLocale {
  firstDayOfWeek: number;
  dayNames: string[];
  dayNamesShort: string[];
  dayNamesMin: string[];
  monthNames: string[];
  monthNamesShort: string[];
  today: string;
  clear: string;
  dateFormat: string;
}
