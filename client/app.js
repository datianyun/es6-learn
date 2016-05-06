
/*generator*/
import greeting from './content';
// We can use any ES6 syntax supported by Babel here now!
function* helloWorldGenerator() {
    yield 'hello121';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());


/*Promise*/
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');

/*异步操作和Async函数*/
