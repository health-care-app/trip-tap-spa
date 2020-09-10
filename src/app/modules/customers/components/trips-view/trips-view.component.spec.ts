import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsViewComponent } from './trips-view.component';

describe('TripsViewComponent', (): void => {
  let component: TripsViewComponent;
  let fixture: ComponentFixture<TripsViewComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ TripsViewComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TripsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
