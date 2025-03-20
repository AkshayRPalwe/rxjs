import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const interval$ = interval(1000); // Defination, Not a stream
    const interval$ = timer(3000, 1000);
    //               (time delay, time interval)

    interval$.subscribe((val) => console.log('stream 1: ' + val));

    const click$ = fromEvent(document, 'click');

    click$.subscribe((event) => console.log(event));
  }
}
