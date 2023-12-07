import readString from "../../readString.js"

const data = await readString("./data.txt")
const testData = await readString("./testData.txt")

function getScore(str, regex) {
    const matches = str.match(regex);
    if (!matches) return 0;

    return Math.max(...matches.map(match => parseInt(match.split(" ")[0])))
}

function solved(input) {
    const redRegex = /(\d+)\sred/g;
    const greenRegex = /(\d+)\sgreen/g;
    const blueRegex = /(\d+)\sblue/g;

    const red = 12
    const green = 13
    const blue = 14

    let gameSum = 0

    input.forEach(line => {
        const gameId = line.split(":")[0].split(" ")[1]
        const sets = line.split(";").map(set => set.trim())

        const redSum = getScore(sets.join(" "), redRegex)
        const greenSum = getScore(sets.join(" "), greenRegex)
        const blueSum = getScore(sets.join(" "), blueRegex)

        gameSum += redSum * greenSum * blueSum
    });

    console.log(gameSum)
}

solved(data)

// console.log(sum);
