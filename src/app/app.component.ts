import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@Environment';

@Component({
  selector: 'trip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'trip-tap-spa';

  public constructor(
    private readonly translateService: TranslateService,
  ) {
  }

  public ngOnInit(): void {
    this.translateService.setDefaultLang(environment.defaultLang);
  }
}
