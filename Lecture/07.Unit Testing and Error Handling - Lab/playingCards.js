function playingCards(face, suit){

    const faces = ['2','3','4','5','6','7','8','9','10','A','K','D','J']
    
    const suits = {
        'S': '\u2660' ,
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if(Object.keys(suits).includes(suit) == false){
        throw new Error;
    }

    if(faces.includes(face) == false){
        throw new Error;
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return face + this.suit;
        }
    }
}
let card1 = playingCards('A', 'S');
console.log(card1.toString())