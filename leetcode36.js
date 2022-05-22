/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const checkHorizontal = () => {
        for (let i = 0; i < 9; i++) {
            const line = new Set()
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    continue
                }
                if (line.has(board[i][j])) {
                    return false
                }
                line.add(board[i][j])
            }
        }
        return true
    }
    const checkVertical = () => {
        for (let i = 0; i < 9; i++) {
            const line = new Set()
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === ".") {
                    continue
                }
                if (line.has(board[j][i])) {
                    return false
                }
                line.add(board[j][i])
            }
        }
        return true
    }

    const checkSquare = () => {
        const isSquareValid = (startY, startX) => {
            const square = new Set()
            for (let i = startY; i < startY + 3; i++) {
                for (let j = startX; j < startX + 3; j++) {
                    if (board[i][j] === ".") {
                        continue
                    }
                    if (square.has(board[i][j])) {
                        return false
                    }
                    square.add(board[i][j])
                }
            }
            return true
        }
        return isSquareValid(0, 0) && isSquareValid(3, 0) && isSquareValid(6, 0) &&
            isSquareValid(0, 3) && isSquareValid(3, 3) && isSquareValid(6, 3) &&
            isSquareValid(0, 6) && isSquareValid(3, 6) && isSquareValid(6, 6)
    }
    debugger
    return checkHorizontal() && checkVertical() && checkSquare()
};