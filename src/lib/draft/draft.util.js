  export function sampleBooster(cards) {
    let cardsInBooster = [];
    while (cardsInBooster.length < 20) {
      const card = cards[Math.floor(Math.random() * cards.length)];
      if (!cardsInBooster.map(c => c.name).includes(card.name)) {
        cardsInBooster.push(card);
      }
    }
    return cardsInBooster;
  }
