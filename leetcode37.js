/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
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
    }
    let isSolved = false
    const backTracking = (startY, startX) => {
        if (!isValidSudoku(board)) {
            return
        }
        if (isSolved) {
            return true
        }
        if (startY === 9) {
            isSolved = true
            return
        }
        if (board[startY][startX] === ".") {
            for (let i = 1; i <= 9; i++) {
                if (!isSolved) {
                    board[startY][startX] = i.toString()
                    if (startX === 8) {
                        backTracking(startY + 1, 0)
                    } else {
                        backTracking(startY, startX + 1)
                    }
                }
            }
            if (!isSolved) {
                board[startY][startX] = "."
            }
        } else {
            if (startX === 8) {
                backTracking(startY + 1, 0)
            } else {
                backTracking(startY, startX + 1)
            }
        }
    }
    backTracking(0, 0)
};

