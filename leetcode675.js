/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
    const path = []
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[0].length; j++) {
            if (forest[i][j] > 1) {
                path.push({
                    y: i,
                    x: j
                })
            }
        }
    }
    path.sort((left, right) => {
        return forest[left.y][left.x] - forest[right.y][right.x]
    })
    path.unshift({
        y: 0,
        x: 0
    })
    const shortestPath = (pointA, pointB) => {
        const queue = []
        queue.push({
            currentPoint: pointA,
            step: 0
        })
        const set = new Set()
        while (queue.length !== 0) {
            const point = queue.shift()
            const coordinate = point.currentPoint
            if (set.has(coordinate.y + "*" + coordinate.x)) {
                continue
            }
            if (coordinate.y === pointB.y && coordinate.x === pointB.x) {
                return point.step
            }
            if (coordinate.y < 0 || coordinate.x < 0 || coordinate.y >= forest.length || coordinate.x >= forest[0].length) {
                continue
            }
            if (forest[coordinate.y][coordinate.x] === 0) {
                continue
            }
            queue.push({
                currentPoint: { y: coordinate.y + 1, x: coordinate.x },
                step: point.step + 1
            })
            queue.push({
                currentPoint: { y: coordinate.y - 1, x: coordinate.x },
                step: point.step + 1
            })
            queue.push({
                currentPoint: { y: coordinate.y, x: coordinate.x + 1 },
                step: point.step + 1
            })
            queue.push({
                currentPoint: { y: coordinate.y, x: coordinate.x - 1 },
                step: point.step + 1
            })
            set.add(coordinate.y + "*" + coordinate.x)
        }
        return -1
    }
    let totalDistance = 0
    for (let i = 1; i < path.length; i++) {
        const currentPoint = path[i]
        const prevPoint = path[i - 1]
        const distance = shortestPath(prevPoint, currentPoint)
        if (distance === -1) {
            return -1
        }
        totalDistance += distance
    }
    return totalDistance
};