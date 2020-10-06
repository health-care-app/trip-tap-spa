import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCreateComponent } from './trips-create.component';

describe('TripsCreateComponent', (): void => {
  let component: TripsCreateComponent;
  let fixture: ComponentFixture<TripsCreateComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ TripsCreateComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TripsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
