import readString from "../../readString.js"

const input = await readString('./data.txt')
const testInput = await readString('./testData.txt')

function orderHand(hand) {
    console.log(hand)
}

function solved(input) {
    input.forEach(line => {
        const [hand, bid] = line.split(" ")

        const orderedHand = orderHand(hand)
    })

}

solved(testInput)