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
    // stream 1
    document.addEventListener('click', (event) => {
      console.log(event);
    });

    //stream 2
    let count = 0;
    setInterval(() => {
      console.log(count);
      count++;
    }, 1000);

    // stream 3
    setTimeout(() => {
      console.log('finished...');
    }, 3000);
  }
}
