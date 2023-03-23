  //import { ajax } from 'rxjs/ajax';
  import { forkJoin } from 'rxjs';
//   import pkg from 'rxjs/ajax';
// const { ajax ,xmlHttpRequest} = pkg;


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
/*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/

forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
  {
    google: xhr.getJSON('https://api.github.com/users/google'),
    microsoft: xhr.getJSON('https://api.github.com/users/microsoft'),
    users: xhr.getJSON('https://api.github.com/users')
  }
)
  // { google: object, microsoft: object, users: array }
  .subscribe(console.log);
