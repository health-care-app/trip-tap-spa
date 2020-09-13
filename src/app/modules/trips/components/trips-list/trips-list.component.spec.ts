import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListComponent } from './trips-list.component';

describe('TripsListComponent', (): void => {
  let component: TripsListComponent;
  let fixture: ComponentFixture<TripsListComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ TripsListComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
