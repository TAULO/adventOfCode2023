import readString from "../../readString.js"

const NUM_WORDS = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

async function solved() {
    const input = await readString('./data.txt')

    const test = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"]
    const NUM_WORD_ENTRIES = Object.entries(NUM_WORDS);
    
    function strToNum(str) {
        for (let [word, num] of NUM_WORD_ENTRIES) {
            if (str.startsWith(word)) {
                return num;
            }
        }
    
        // Will get filtered out
        return '';
    }
    
    const numbersInLines = test.map((line) => {
        const allNumbers = line
            .split('')
            .map((char, i) => {
                const restOfLineFromChar = line.slice(i);
                
                return /\d/.test(char) ? char : strToNum(restOfLineFromChar);
            })
            .filter((char) => char);
    
        const firstNumber = allNumbers[0];
        const lastNumber = allNumbers[allNumbers.length - 1];
        return parseInt(`${firstNumber}${lastNumber}`, 10);
    });
    
    let sum = 0;
    console.log(numbersInLines)
    for (let num of numbersInLines) {
        sum += num;
    }

    console.log(sum)
}

solved()