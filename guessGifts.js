const wishlist = [
    {name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light'},
    {name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium'},
    {name: 'Card Game', size: 'small', clatters: 'no', weight: 'light'}
]

const presents = [
    {size: 'medium', clatters: 'a bit', weight: 'medium'},
    {size: 'small', clatters: 'yes', weight: 'light'}
]

//// My Solution ////

function guessGifts (wishArr, presArr) {
    let guessed = []
    presArr.forEach( p => {
        wishArr.forEach( w => {
            if (p.size === w.size && p.clatters === w.clatters && p.weight === w.weight) {
                guessed.push(w.name)
            }
        })
    })
    return guessed
}

console.log(guessGifts(wishlist, presents))


//// Jared's Solution ////

function guessGifts(wishArr, presArr) {
    guesses = []
    for (let i = 0; i < wishArr.length; i++) {
        let currentWishArr = wishArr[i]
    for (let k = 0; k < presArr.length; k++) {
        let currentPresArr = presArr[k]
    
    if (currentWishArr.size === currentPresArr.size && currentWishArr.clatters === currentPresArr.clatters && currentWishArr.weight === currentPresArr.weight) {
        guesses.push(currentWishArr.name)}
    }
    }
    return guesses
}

console.log(guessGifts(wishlist, presents))
