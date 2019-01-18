import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Year} from '../services/data.service';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-display-year',
  templateUrl: './display-year.component.html',
  styleUrls: ['./display-year.component.scss']
})
export class DIsplayYearComponent implements OnChanges {

  @Input() data: Year;
  @Input() year: number;
  public displayData = new BehaviorSubject([]);

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.data) {
      const months = [];
      for (let i = 1; i <= 12; i++) {
        const days = [];
        for (let j = 1; j <= moment(`${i}-${this.year}`, 'M-Y').daysInMonth(); j++) {
          const day = moment(`${j}-${i}-${this.year}`, 'D-M-Y').dayOfYear();
          const dayData = changes.data.currentValue.days[day];
          if (dayData) {
            days.push(dayData);
          } else {
            days.push({mood: 0});
          }
        }
        const month = moment(`${i}-${this.year}`, 'M-Y').format('MMM');
        months.push({month, days});
      }
      this.displayData.next(months);
    }
  }
}
