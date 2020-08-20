import { AbstractControlOptions } from '@angular/forms';
import { Observable } from 'rxjs';

export type Primitive = number | string | boolean | object;

export type Spied<T> = jasmine.SpyObj<T> & {
  // tslint:disable-next-line:no-any
  [key: string]: Primitive | Observable<any>;
};

export type MockedAbstractControl = [Primitive, AbstractControlOptions];

export interface MockedFormGroup {
  [key: string]: Primitive | MockedAbstractControl;
}
