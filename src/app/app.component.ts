import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AboutComponent} from './about/about.component';
import {NewEntryComponent} from './new-entry/new-entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  function;

  constructor(private _dialog: MatDialog){}

  showAbout() {
    this._dialog.open(AboutComponent);
  }
  newEntry() {
    this._dialog.open(NewEntryComponent);
  }
}
