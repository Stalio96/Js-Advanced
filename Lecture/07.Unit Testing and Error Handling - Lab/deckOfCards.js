function printDeckOfCards(cards) {

    let result = [];

    for(let card of cards){
        let face = card.slice(0,-1);
        let suit = card.slice(-1);

        try {
            result.push(createCard(face,suit));
        } catch (error) {
            console.log('Invalid card: ' + card);
            return;
        }
    }
    console.log(result.join(' '))
    //console.log(cards.map(card => {
    //    let face = card.slice(0, -1);
    //    let suit = card.slice(-1);
//
    //    return createCard(face, suit);
    //}).join(' '));

    function createCard(face, suit) {

        // Use the solution from the previous task 
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J']

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (Object.keys(suits).includes(suit) == false) {
            throw new Error;
        }

        if (faces.includes(face) == false) {
            throw new Error;
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return face + this.suit;
            }
        }
    };

    // TODO
}
console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']))