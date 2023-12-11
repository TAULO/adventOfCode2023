import readString from "../../readString.js"

const input = await readString('./data.txt')
const testInput = await readString('./testData.txt')

const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]

function getHands(hand, bid) {
    const pairs = [...hand].reduce((acc, curr) => (acc[curr] = ++acc[curr] || 1, acc), {})
    const hands = []

    cards.forEach(card => {
        const pair = pairs[card]

        if (pair) {
            hands.push({
                hand,
                pair,
                card,
                bid
            })
        }
    })
    return hands
}

function calcHandScore(arr, hand) {
    let score = 0
    if (arr.length === 4) {
        score += 0
    } else if (arr.length === 3) {
        score += 20
    } else if (arr.length === 2) {
        score += 30
    } else {
        score += 40
    }

    return (hand.pair * cards.indexOf(hand.card)) + score
} 

function orderHands(hands) {
    let orderedHand = []

    orderedHand = hands.map((hand) => {
        return hand.map((hand, i, arr) => {
            return  {
                ...hand,
                score: calcHandScore(arr, hand)
            }
        })
    })

    orderedHand = orderedHand.sort((a, b) => {
        const handA = Math.max(...a.map(hand => hand.score))
        const handB = Math.max(...b.map(hand => hand.score))

        return handB - handA
    })

    orderedHand = orderedHand.sort((a, b) => {
        const handA = Math.max(...a.map(a => a.pair))
        const handB = Math.max(...b.map(a => a.pair))

        return handB - handA
    })

    return  orderedHand
}

function calculateWinnings(orderedHand) {
    let score = 0
    
    for (let i = orderedHand.length - 1; i >= 0; i--) {
        score += (orderedHand[i][0].bid * (i + 1))
    }

    console.log(score)
}

function solved(input) {
    const hands = []
    input.forEach(line => {
        let [hand, bid] = line.split(" ")
        bid = [bid].map(b => parseInt(b))[0]

        hands.push(getHands(hand, bid))

    })

    const orederdHand = orderHands(hands)

    console.log(orederdHand)

    calculateWinnings(orederdHand)
}

solved(testInput)