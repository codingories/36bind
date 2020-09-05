function bind(asThis, ...args) {
  // this 就是函数
  const fn = this //fn1
  return function(...args2){
    return fn.call(asThis, ...args,...args2) // fn1.call({ name: 'ories' })
  };
}

module.exports = bind;

if(!Function.prototype.bind){
  Function.prototype.bind = bind
}
