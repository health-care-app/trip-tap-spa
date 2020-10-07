import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Durations } from '@Enums/durations.enum';

@Injectable()
export class DurationService {

  public constructor(
    private readonly translateService: TranslateService,
  ) {
  }

  public getHourDuration(duration: number): string {
    const hours: number = Math.floor(duration);
    const minutes: number = (duration % 1) * Durations.MinutesInHour;

    return `${
      hours > 0 ? this.translateService.instant('APP.VALUE_HOURS', { hours }) : ''
    }${
      minutes > 0 ? ` ${this.translateService.instant('APP.VALUE_MINUTES', { minutes })}` : ''
    }` || this.translateService.instant('APP.VALUE_HOURS', { hours: 0 });
  }
}
