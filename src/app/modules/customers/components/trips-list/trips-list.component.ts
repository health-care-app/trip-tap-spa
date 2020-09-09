import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CustomersFacade } from '@Modules/customers/store/customers.facade';

@Component({
  selector: 'trip-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsListComponent implements OnInit {

  public constructor(
    private readonly customersFacade: CustomersFacade,
  ) {
  }

  public ngOnInit(): void {
    this.customersFacade.getAllTrips(true);
  }
}
