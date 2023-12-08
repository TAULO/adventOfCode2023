import readString from "../../readString.js"

const input = { time: 51699878, distance: 377117112241505 }

const testInput = { time: 71530, distance: 940200 }

function beatRecord({ time, distance }) {
    let sum = 0
    for (let i = 1; i < time; i++) {
        const hold = i
        const speed = hold
        const timeToMove = time - hold
        const record = timeToMove * speed

        if (record > distance) {
            sum += 1
        }
    }
    return sum
}


function solved(input) {
    let total = 1

    total *= beatRecord(input)
    console.log(total)
}

solved(input)