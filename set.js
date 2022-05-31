const meuSet = new Set([30, 30, 40, 5, 223, 2049, 3034, 5])

function setParaArray(set) {
    const array = [];
    for(let v of set) {
        array.push(v)
    }
    return array
}
console.log(setParaArray(meuSet))