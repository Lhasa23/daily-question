var foo = (function(){
  var a = 0;
 return function(){
   return ++a
 }
}())
foo()
var temp = foo()
console.log(temp)