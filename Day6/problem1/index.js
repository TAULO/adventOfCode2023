import readString from "../../readString.js"

const input = [{
        time: 51,
        distance: 377
    },
    {   
        time: 69,
        distance: 1171
    },
    {
        time: 98,
        distance: 1224
    },
    {
        time: 78,
        distance: 1505
    }
]

const testInput = [
    {
        time: 7,
        distance: 9
    }, 
    {
        time: 15,
        distance: 40
    },
    {
        time: 30,
        distance: 200
    }
]

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

    input.forEach(records => {
        total *= beatRecord(records)
    })
    console.log(total)
}

solved(input)