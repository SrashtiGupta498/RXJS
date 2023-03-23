import { from } from 'rxjs';
import { map } from 'rxjs/operators';

//emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//add 10 to each value
const example = source.pipe(map(val => val + 10));
//output: 11,12,13,14,15
const subscribe = example.subscribe(val => console.log(val));

import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([1, 1, 2, 2, 3, 3]);

source$
  .pipe(distinctUntilChanged())
  // output: 1,2,3
  .subscribe(console.log);

//   /////////////////////////
//   import { ajax } from 'rxjs/ajax';
//   import { forkJoin } from 'rxjs';
// //  var XMLHttpRequest = require('xhr2');
// //  var xhr = new XMLHttpRequest();

// /*
//   when all observables complete, provide the last
//   emitted value from each as dictionary
// */
// global.XMLHttpRequest = require('xhr2');
// forkJoin(
//   // as of RxJS 6.5+ we can use a dictionary of sources
//   {
//     google: ajax.getJSON('https://api.github.com/users/google'),
//     microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
//     users: ajax.getJSON('https://api.github.com/users')
//   }
// )
//   // { google: object, microsoft: object, users: array }
//   .subscribe(console.log);

// RxJS v6+

import { pluck } from 'rxjs/operators';

const sources = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  //will return undefined when no job is found
  { name: 'Sarah', age: 35 }
]);
//grab title property under job
const examples = sources.pipe(pluck('job', 'title'));
//output: "Developer" , undefined
const subscribes = examples.subscribe(val => console.log(val));

/////////////////////////////////////
import { of } from 'rxjs';
import {  catchError } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
    map(n => {
  	   if (n === 4) {
	       throw 'four!';
      }
     return n;
    }),
    catchError(err => of('I', 'II', 'III', 'IV', 'V')),
  )
  .subscribe(x => console.log(x));



