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
