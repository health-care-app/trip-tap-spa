import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CustomersFacade } from '../../store/customers.facade';

@Component({
  selector: 'trip-trips-view',
  templateUrl: './trips-view.component.html',
  styleUrls: ['./trips-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsViewComponent implements OnInit {

  public constructor(
    private readonly customersFacade: CustomersFacade,
  ) {
  }

  public ngOnInit(): void {
    this.customersFacade.getTrip(1);
  }
}
