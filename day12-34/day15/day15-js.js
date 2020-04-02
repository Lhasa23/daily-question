function flat(arr, target) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flat(item, target)
        } else {
            target.push(item)
        }
    })
}

function flatArr(arr) {
    let result = []
    flat(arr, result)
    return result
}

function uniqueArr(arr) {
    // return [...new Set(flatArr(arr))]
    return [...new Set(arr.flat(Infinity))]
}

const result = uniqueArr([1, 2, 3, 4, [3, 4, [4, 6]]])

console.log(result) // 1,2,3,4,6