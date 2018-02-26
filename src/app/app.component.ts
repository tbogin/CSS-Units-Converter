import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  remValue: number;
  pxValue: number;
  selectedValue = 'Pixels';
  formSubmitted: boolean = false;

  measurement: string[] = ["Pixels", "REM"];

  handleSelect(unit: string) {
    this.formSubmitted = false;
    this.selectedValue = unit;
  }

  handleSubmit(unit : number) {
    this.formSubmitted = true;
    this.selectedValue === 'Pixels' ?
      this.pixToREM(unit) : this.remToPx(unit) + ' px';    
  }

  remToPx(rem: number, basePx = 26) {
    this.pxValue = (rem * basePx);
  }

  pixToREM(pixels : number, basePx = 16) {
    this.remValue = (pixels / basePx);
  }
}
