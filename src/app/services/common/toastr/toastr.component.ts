import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class ToastrComponent {
    constructor(private spinner: NgxSpinnerService) {
    }

    showSpinner(spinnerType :SpinnerType){
      this.spinner.show(spinnerType);
      setTimeout(() => {
        this.hideSpinner(spinnerType);
      }, 3000);
    }

    hideSpinner(spinnerType: SpinnerType){
      this.spinner.hide(spinnerType);
    }
}

export enum SpinnerType{
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"
}
