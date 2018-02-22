import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';


//Base font size (16px) that can be changed
 //2 way binding?
//1 input field
 //User can select whether they will input px or REM
//Calculate button 
 //Press button to see the px or REM

//Functions
 //Convert REM to px
 //Convert px to REM
 //handle click by calling REM or px convert functions depending on user selection

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
    return this.pxValue;
  }

  pixToREM(pixels : number, basePx = 16) {
    this.remValue = (pixels / basePx);
    // return this.remValue;
  }
}
