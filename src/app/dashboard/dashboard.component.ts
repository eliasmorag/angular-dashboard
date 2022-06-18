import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

export interface DashboardCard {
  id: number;
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards: DashboardCard[] = [
    { id: 1, title: 'Card 1', cols: 2, rows: 1 },
    { id: 2, title: 'Card 2', cols: 1, rows: 1 },
    { id: 3, title: 'Card 3', cols: 1, rows: 2 },
    { id: 4, title: 'Card 4', cols: 1, rows: 1 }
  ];

  /** Based on the screen size, switch from standard to one column per row */
  isHandheld$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  onRemove(card: DashboardCard): void {
    this.cards = this.cards.filter(c => c.id !== card.id);
  }

  onExpand(card: DashboardCard): void {
    card.cols = 2;
    card.rows = 2;
  }
}
