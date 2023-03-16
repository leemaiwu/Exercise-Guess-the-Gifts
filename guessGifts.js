const wishlist = [
    {name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light'},
    {name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium'},
    {name: 'Card Game', size: 'small', clatters: 'no', weight: 'light'}
]

const presents = [
    {size: 'medium', clatters: 'a bit', weight: 'medium'},
    {size: 'small', clatters: 'yes', weight: 'light'}
]

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
