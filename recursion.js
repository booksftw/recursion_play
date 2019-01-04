const list1 = [2,3,4,5,6,7,8,6,4,7]

// While Loop that outputs everything until input found
const whileLoopFunc = function (list, searchVal) {
    let i = 0 
    while (list.length > i) {
        console.log('while console', list[i], searchVal)
        const listItem = list[i]
        if (listItem === searchVal) {
            return `${list[i]} : THE SEARCH TERM IS IN THE LIST`
        }
        i++
    }
    return `THE SEARCH DOESN\'nt EXIST`
}

// console.log( whileLoopFunc(list1, 18) )
 
const recursiveFunc = function(list, searchVal, index) {
    console.log(index)
    const listItem = list[index]
    if (listItem === searchVal) {
        console.log('baseCASE')

console.log( recursiveFunc(list1, 8, 0) )
