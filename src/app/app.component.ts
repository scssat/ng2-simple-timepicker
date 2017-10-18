import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TimePickerModule } from '../../timepicker/timepicker.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private time:string;

  title = 'app';
}
