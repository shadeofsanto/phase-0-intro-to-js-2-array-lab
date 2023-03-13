const cats = [ 'Milo', 'Otis', 'Garfield' ];
cats.push();

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}


function appendCat(name) {
    const copyCats = [...cats]
    copyCats.push(name)
    return copyCats
}

function prependCat(name) {
    const prepCats = [...cats]
    prepCats.unshift(name)
    return prepCats
}

function removeLastCat(name) {
    const removeCats = [...cats]
    removeCats.pop(name)
    return removeCats
}

function removeFirstCat(name) {
    const removeFirst = [...cats]
    removeFirst.shift(name)
    return removeFirst
}