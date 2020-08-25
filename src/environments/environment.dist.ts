import { SupportedLanguages } from '@Enums/supported-languages.enum';
import { Environment } from '@Models/environment.model';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  defaultLang: SupportedLanguages.English,
};
