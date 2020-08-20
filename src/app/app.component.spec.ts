import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';

import { SupportedLanguages } from '@Enums/supported-languages.enum';
import { TranslateTestingModule } from '@Specs/translate.spec';
import { Spied } from '@Specs/utils.type';

import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let mockedTranslateService: Spied<TranslateService>;

  beforeEach(async((): void => {
    mockedTranslateService = jasmine.createSpyObj('TranslateService', ['setDefaultLang']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: TranslateService, useValue: mockedTranslateService },
      ],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should have as title \'trip-tap-spa\'', (): void => {
    expect(component.title).toEqual('trip-tap-spa');
  });

  it('should call TranslateService.setDefaultLang', (): void => {
    expect(mockedTranslateService.setDefaultLang).toHaveBeenCalledTimes(1);
    expect(mockedTranslateService.setDefaultLang).toHaveBeenCalledWith(SupportedLanguages.English);
  });
});
