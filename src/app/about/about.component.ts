import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // -------------------------------------------------------------------------------------
    //    Why use RxJS?
    // -------------------------------------------------------------------------------------
    // JavaScript applications often deal with multiple asynchronous streams 
    // (e.g., user interactions, backend requests, timers).
    // Combining these streams using native JavaScript callbacks leads to callback hell,
    // making the code difficult to read and maintain.
    // -------------------------------------------------------------------------------------
    //    How does RxJS help?
    // ----------------------------------------------------------------------------------    
    // RxJS (Reactive Extensions for JavaScript) provides a structured way to combine and manage streams of values.
    // It replaces deeply nested callbacks with a more maintainable approach using Observables.

    document.addEventListener('click', (event) => {
      console.log(event);
      setTimeout(() => {
        console.log('finished...');
        let count = 0;
        setInterval(() => {
          console.log(count);
          count++;
        }, 1000);
      }, 3000);
    });
  }
}
