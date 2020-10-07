import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SupportedLanguages } from '@Enums/supported-languages.enum';

@Injectable()
export class LocalizationService {

  public constructor(
    private readonly translateService: TranslateService,
  ) {
  }

  public getLanguage(): SupportedLanguages {
    return <SupportedLanguages>(this.translateService.currentLang || this.translateService.defaultLang);
  }
}
