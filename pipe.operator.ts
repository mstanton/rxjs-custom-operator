import { Observable, pipe } from 'rxjs/Rx';
import { filter, map, reduce } from 'rxjs/operators';

const filterOutEvens = filter(x => x % 2);
const sum = reduce((acc, next) => acc + next, 0);
const doubleBy = x => map(value => value * x);

const complicatedLogic = pipe(
  filterOutEvens,
  doubleBy(2),
  sum
);

const source$ = Observable.range(0, 10);

source$.let(complicatedLogic).subscribe(x => console.log(x)); // 50