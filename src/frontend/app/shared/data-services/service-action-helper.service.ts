import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app-state';
import { ConfirmationDialogService } from '../components/confirmation-dialog.service';
import { ConfirmationDialogConfig } from '../components/confirmation-dialog.config';
import { DeleteServiceBinding } from '../../store/actions/service-bindings.actions';
import { DeleteServiceInstance } from '../../store/actions/service-instances.actions';

@Injectable()
export class ServiceActionHelperService {

  constructor(
    private confirmDialog: ConfirmationDialogService,
    private store: Store<AppState>,

  ) { }

  detachServiceBinding = (
    serviceBindingGuid: string,
    serviceInstanceGuid: string,
    endpointGuid: string
  ) => {
    const confirmation = new ConfirmationDialogConfig(
      'Detach Service Instance',
      'Are you sure you want to detach the application from the service?',
      'Detach',
      true
    );
    this.confirmDialog.open(confirmation, () =>
      this.store.dispatch(new DeleteServiceBinding(endpointGuid, serviceBindingGuid, serviceInstanceGuid))
    );
  }


  deleteServiceInstance = (
    serviceInstanceGuid: string,
    endpointGuid: string
  ) => {
    const confirmation = new ConfirmationDialogConfig(
      'Delete Service Instance',
      'Are you sure you want to delete the service instance?',
      'Delete',
      true
    );
    this.confirmDialog.open(confirmation, () =>
      this.store.dispatch(new DeleteServiceInstance(endpointGuid, serviceInstanceGuid))
    );
  }

}
