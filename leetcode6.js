/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) { return s }
    let row = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        row[i] = []
    }
    let isDown = true
    let index = 0
    for (let i of s) {
        row[index].push(i)
        if (index === 0) {
            index = 1
            isDown = true
        } else if (index === numRows - 1) {
            index = numRows - 2
            isDown = false
        } else if (isDown) {
            index++
        } else {
            index--
        }
    }
    let arr = ""
    row.forEach(
        (array) => {
            array.forEach(
                (char) => {
                    arr += char
                }
            )
        }
    )
    return arr
};