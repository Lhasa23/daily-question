function ttt(arr1){
    let random = parseInt(Math.random() * 31 + 2, 10)
    if(arr1.indexOf(random) < 0){
        arr1.push(random)
    }
    if(arr1.length < 5){
        ttt(arr1)
    } else {
        arr = arr1
        return
    }
}
ttt([])
console.log(arr)