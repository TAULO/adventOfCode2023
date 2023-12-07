import fs from 'fs'

export default (async (path) => {
    const arr = []

    await fs.promises.readFile(path, 'utf-8')
        .then((text) => {
            arr.push(text)
        })
        .catch((e) => console.error(e));
        return arr[0].split("\n")
})

