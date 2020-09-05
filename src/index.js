var slice = Array.prototype.slice;
function bind(asThis) {
  // this 就是函数
  var args = slice.call(arguments,1)
  var fn = this //fn1
  if(typeof fn !=='function'){
    throw new Error("bind 必须调用在函数身上")
  }
  return function(){
    var args2= slice.call(arguments,0)
    return fn.apply(asThis, args.concat(args2)) // fn1.call({ name: 'ories' })
  };
}

module.exports = bind;

if(!Function.prototype.bind){
  Function.prototype.bind = bind
}
