import readString from "../../readString.js"

const input = await readString('./data.txt')
const testInput = await readString('./testData.txt')

function solved(input) {
    const instructions = input[0]
    const steps = []

    input.forEach(line => {
        let [position, next] = line.split("=")

        position = position.split(instructions)[0].trim()

        if (next && position) {
            const left = next.substring(2, 5).trim()
            const right = next.substring(7, 10).trim()

            steps.push({
                position: position,
                'L': left, 
                'R': right
            })
        }
    })  

    // start
    let startIndex = steps.findIndex((step) => step.position === 'AAA')
    let pos = steps[startIndex].position

    console.log(pos)
    
    let index = 0
    let stepsCount = 0
    while (pos !== 'ZZZ') {
        const dir = instructions[index++]
        if (!dir) {
            index = 0
        } else {   
            const posIndex = steps.findIndex((step) => step.position === pos)
            pos = Object.values(steps[posIndex][dir]).join("")
            stepsCount += 1
        }      
    }
    console.log(stepsCount)
}

solved(input)