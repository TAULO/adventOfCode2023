import readString from "../../readString.js"
const data = await readString('./data.txt')

function solved() {
    const digits = []
    let sum = 0

    for (let i = 0; i < data.length; i++) {
        let digit = []
        for (let j = 0; j < data[i].length; j++) {
            const letter = data[i][j]
            if (parseInt(letter)) {
                digit.push(letter)
            }
        }
        digits.push(digit)
    }

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i]
        sum += parseInt(digit[0] + digit[digit.length - 1])
    }

    return sum
}

function solved2() {
    let sum = 0
    data.map(d => [...d]
        .filter(d => parseInt(d)))
        .forEach(d => sum+= parseInt(d[0] + d[d.length -1]))

    return sum
}

const sum1 = solved()
const sum2 = solved2()

console.log("sum1", sum1)
console.log("sum2", sum2)
