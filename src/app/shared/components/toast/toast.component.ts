import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Message, MessageService } from 'primeng/api';
import { filter, map } from 'rxjs/operators';

import { ToastSeverity } from '@Enums/toast-severity.enum';
import { Error } from '@Models/error.model';
import { State } from '@Models/store.model';
import { errorSelectors } from '@Store/error/error.selectors';

@Component({
  selector: 'trip-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {

  public constructor(
    private readonly store: Store<State>,
    private readonly messageService: MessageService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(errorSelectors.selectError),
        filter((error: Error): boolean => !!error),
        map((error: Error): string[] => error.messages),
        filter((messages: string[]): boolean => messages && messages.length > 0),
      )
      .subscribe((errorMessages: string[]): void => {
        const toastMessages: Message[] = errorMessages.map((errorMessage: string): Message => ({
          severity: ToastSeverity.Error,
          detail: errorMessage,
        }));

        this.messageService.addAll(toastMessages);
        this.changeDetectorRef.markForCheck();
      });
  }
}
