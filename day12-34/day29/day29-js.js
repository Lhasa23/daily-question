function max(arr){
    return Math.max.apply(Array, arr)
}
console.log(max([1,2,3,4,5,6,42]))