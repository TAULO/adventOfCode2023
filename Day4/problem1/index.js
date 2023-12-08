import readString from "../../readString.js"

const data = await readString("./data.txt")
const testData = await readString("./testData.txt")

function getNums(nums) {
    return nums.split(" ").filter(num => parseInt(num)).map(num => parseInt(num))
}

function solved(input) {
    let total = 0
    input.forEach(line => {
        let points = 0
        const [game, numbers] = line.split(":")

        const winningNums = getNums(numbers.split("|")[0])
        const myNums = getNums(numbers.split("|")[1])

        const nums = myNums.filter(num => winningNums.includes(num)).length

        if (nums > 0) {
            points = 1

            if (nums > 1) {
                points *= Math.pow(2, nums - 1)
            }
        }

        console.log(game, points)
        total += points
    })
    console.log(total)
}

solved(data)