function* loadUI() {
  console.log(1);
  yield console.log(2);
  console.log(3);
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next()

var handler = {
  get: function(target, name) {
    if (name === 'prototype') return Object.prototype;
    return 'Hello, '+ name;
  },
  apply: function(target, thisBinding, args) { return args[0]; },
  construct: function(target, args) { return args[1]; }
};

var fproxy = new Proxy(function(x,y) {
  return x+y;
},  handler);

var a = fproxy(1,2); // 1
var a  = new fproxy(1,2); // 2
fproxy.prototype; // Object.prototype
fproxy.foo; // 'Hello, foo'
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
