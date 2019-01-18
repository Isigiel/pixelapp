import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public function;
  private data: BehaviorSubject<{ [year: number]: Year }>;

  constructor() {
    const storedData = localStorage.getItem('pixelday_years');
    if (storedData) {
      this.data = new BehaviorSubject(JSON.parse(storedData));
    } else {
      this.data = new BehaviorSubject([]);
    }
    this.data.subscribe(years => localStorage.setItem('pixelday_years', JSON.stringify(years)));
  }

  addDay(year: number, day: number, mood: number) {
    const newData = Object.assign({}, this.data.value);
    if (!newData[year]) {
      newData[year] = { days: [] };
    }
    const days = [...newData[year].days];
    days[day] = { mood };
    newData[year] = { ...newData[year], days };
    this.data.next(newData);
  }

  getYear(year: number): Observable<Year | false> {
    return this.data.pipe(
      map(years => {
        if (years[year]) {
          return years[year];
        } else {
          return false;
        }
      })
    );
  }

  getDay(year: number, day: number): Observable<Day | false> {
    return this.getYear(year).pipe(
      map(yearData => {
        if (!yearData) {
          return false;
        }
        if (yearData.days[day]) {
          return yearData.days[day];
        } else {
          return false;
        }
      })
    );
  }
}

export interface Year {
  days: Day[];
}

export interface Day {
  mood: number;
}
