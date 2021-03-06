import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';
import { DataService, Year } from './services/data.service';
import { map, switchMap } from 'rxjs/operators';
import { InstallPromptService } from './services/install-prompt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public displayYear$: BehaviorSubject<number>;
  public yearData$: Observable<Year | false>;
  public fabDisabled$: Observable<boolean>;
  public canInstall$: Observable<boolean>;
  public currentYear: number;
  private currentDay: number;

  constructor(
    private _dialog: MatDialog,
    private _dataService: DataService,
    private promptService: InstallPromptService
  ) {}

  ngOnInit(): void {
    this.currentYear = parseInt(moment().format('Y'), 10);
    this.currentDay = parseInt(moment().format('DDDD'), 10);
    this.displayYear$ = new BehaviorSubject(this.currentYear);
    this.yearData$ = this.displayYear$.pipe(switchMap(year => this._dataService.getYear(year)));
    this.fabDisabled$ = this._dataService.getDay(this.currentYear, this.currentDay).pipe(map(day => !!day));
    this.canInstall$ = this.promptService.canPrompt();
  }

  showAbout() {
    this._dialog.open(AboutComponent);
  }

  newEntry() {
    this._dialog
      .open(NewEntryComponent)
      .afterClosed()
      .subscribe(data => {
        if (data) {
          console.log(data);
          this._dataService.addDay(this.currentYear, this.currentDay, data);
        }
      });
  }

  installApp() {
    this.promptService.getEvent().prompt();
  }
}
