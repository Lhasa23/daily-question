function transCalmal(str){
    let temp = str.split('_')
    temp = temp.map((item, index) => {
        if(index > 0){
            return item[0].toUpperCase() + item.substring(1)
        } else return item
    })
    return temp.join('')
}
console.log(transCalmal('my_name_is_shiyi'))
