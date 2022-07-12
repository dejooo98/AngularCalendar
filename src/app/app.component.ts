import { Calendar } from './calendar.service';
import { Component } from '@angular/core';
import { Day } from './day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public monthDays!: Day[];
  public monthNumber!: number;
  public year!: number;
  public weekDaysName = [];

  constructor(public calendar: Calendar) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendar.getCurrentMonth());

    this.weekDaysName.push('Mo');
    this.weekDaysName.push('Tu');
    this.weekDaysName.push('We');
    this.weekDaysName.push('Th');
    this.weekDaysName.push('Fr');
    this.weekDaysName.push('Sa');
    this.weekDaysName.push('Su');
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 12) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendar.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendar.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
