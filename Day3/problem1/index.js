import readString from "../../readString.js"

const data = await readString("./data.txt")
const testData = await readString("./testData.txt")

function solved(input) {
    // input.forEach(line => {

    // })

    for (let i = 0; i < input.length; i++) {
        const line = input[i]
        for (let j = 0; j < line.length; j++) {
            console.log(input[i][j])
            const char = line[j]
            const right = line[j + 1]
            const left = line[j - 1]
        }
    }
}

solved(testData)