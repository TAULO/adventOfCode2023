import readString from "../../readString.js"

const data = await readString("./data.txt")
const testData = await readString("./testData.txt")


function seedToSoilMapper(distRangeStart, sourceRangeStart, rangeLength) {
    const mapper = []

    for (let i = 0; i < rangeLength; i++) {
        mapper.push(distRangeStart + i)
    }

    return mapper
}

function solved(input) {
    // console.log(input)
    const seedToSoil = seedToSoilMapper(50, 98, 2)

    console.log(seedToSoil)
}

solved(testData)