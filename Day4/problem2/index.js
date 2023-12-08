import readString from "../../readString.js"

const data = await readString("./data.txt")
const testData = await readString("./testData.txt")

function getNums(nums) {
    return nums.split(" ").filter(num => parseInt(num)).map(num => parseInt(num))
}

function solved(input) {
    let total = 0
    input.forEach(line => {
        const [game, numbers] = line.split(":")

        const winningNums = getNums(numbers.split("|")[0])
        const myNums = getNums(numbers.split("|")[1])

        let points = 0

        const nums = myNums.filter(num => winningNums.includes(num)).length

        if (nums <= 0) return

        points += nums
        

    })
    console.log(total)
}

solved(testData)