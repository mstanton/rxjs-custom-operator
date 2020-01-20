import { Component, OnInit } from '@angular/core';

import { Observable, range, pipe } from 'rxjs';
import { filter, map, reduce, flatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 6';

  filterOutEvens = filter((x: number) => x % 2 !== 0);
  doubleBy = (x: number) => map((value: number) => value * x);
  sum = reduce((acc: number, next: number) => acc + next, 0);

  source$ = range(0, 10);

  values = [1, 2, 3];

  funcs = [this.filterOutEvens, this.doubleBy(2), this.sum]

  customLogic = pipe(
      this.filterOutEvens,
      delay(3000),
      this.doubleBy(2),
      this.sum
    )

  ngOnInit() {
    // this.test(this.source$)
    // .subscribe(value => this.values.push(value))

    // this.source$
    // .pipe(...this.funcs).subscribe(value => this.values.push(value))

    this.source$.pipe(this.customLogic)
    .subscribe(value => this.values.push(value))
  }

  test(obs: Observable<any>) {
    return obs.pipe(
        this.filterOutEvens,
        this.doubleBy(2),
        this.sum      
    )
  }

}
