const bind = require('../src/index')


Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined);

const fn1 = function () {
  return this;
}

const newFn1 = fn1.bind2({ name: 'ories' });
console.assert(newFn1().name === 'ories')

const fn2 = function (p1, p2) {
  return [this,p1,p2];
}

const newFn2 = fn2.bind2({ name: 'ories' },123,456);
console.assert(newFn2()[0].name === 'ories', 'this传对了')
console.assert(newFn2()[1] === 123, 'p1')
console.assert(newFn2()[2] === 456, 'p2')

// const anotherFn2 = fn2.bind({ name:"ories" }); // fn.bind(asThis)(param1)
// console.assert(anotherFn2(22,33)[0].name === "ories")
// console.assert(anotherFn2(22,33)[1] === 22)s
// console.assert(anotherFn2(22,33)[2] === 33)

const anotherFn2 = fn2.bind2({ name:"ories" }, 123);
console.assert(anotherFn2(22)[0].name === "ories")
console.assert(anotherFn2(22)[1] === 123)
console.assert(anotherFn2(22)[2] === 22) // 先绑定this和参数，再传参数的测试用例,//fn.bind(asThis, param1,param2)(p3,p4)
