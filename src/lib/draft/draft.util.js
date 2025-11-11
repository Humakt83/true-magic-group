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

export class Draft {
  players = 8;
  boosters = [];
  activeBooster = null;

  constructor(cards) {
    let cardsRemaining = [...cards];
    while (this.boosters.length < (this.players * 3)) {
      const booster = sampleBooster(cardsRemaining);
      this.boosters.push(booster);
      const pickedCards = booster.map(c => c.name);
      cardsRemaining = cardsRemaining.filter(c => !pickedCards.includes(c.name));
    }
    this.activeBooster = this.boosters[0];
  }
}

