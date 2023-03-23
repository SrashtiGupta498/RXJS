import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// elem ref
const searchBox = document.getElementById('search');

// streams
const keyup$ = fromEvent(searchBox, 'keyup');

// wait .5s between keyups to emit current value
keyup$
  .pipe(
    map((i) => i.currentTarget.value),
    debounceTime(500)
  )
  .subscribe(console.log);


import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([1, 1, 2, 2, 3, 3]);

source$
  .pipe(distinctUntilChanged())
  // output: 1,2,3
  .subscribe(val=>console.log(val));