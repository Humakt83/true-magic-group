import { Card } from "../mtg-types";

export function sampleBooster(cards: Array<Card>): Array<Card> {
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

  currentRound = 1;
  players = 8;
  boosters: Array<Array<Card>> = [];
  activeBooster = 0;
  boostersInRound: Array<Array<Card>>;
  pickedCards: Array<Card> = [];
  cardsPicked = 0;

  constructor(cards: Array<Card>) {
    let cardsRemaining = [...cards];
    while (this.boosters.length < (this.players * 3)) {
      const booster = sampleBooster(cardsRemaining);
      this.boosters.push(booster);
      const pickedCards = booster.map(c => c.name);
      cardsRemaining = cardsRemaining.filter(c => !pickedCards.includes(c.name));
    }
    this.boostersInRound = this.boosters.slice(0, this.players);
  }

  nextBooster() {
    this.cardsPicked = 0;    
    if (this.boostersInRound[this.activeBooster].length < 1) {
      if (this.currentRound < 3) {
        this.boostersInRound = this.boosters.slice(this.currentRound * this.players, (this.currentRound + 1) * this.players);
        console.log('Boosters in round', this.boostersInRound.length);
        this.activeBooster = 0;
      }
      this.currentRound += 1;
    } else {
      this.boostersInRound = this.boostersInRound.map((booster, idx) => {
        if (idx === this.activeBooster) {
          return booster;
        }
        return booster.slice(2);
      })
      this.activeBooster += this.activeBooster === 7 ? -7 : 1;
    }
  }

  getActiveBooster(): Array<Card> {
    return this.boostersInRound[this.activeBooster];
  }

  pickCard(idx: number) {
    const card = this.boostersInRound[this.activeBooster].slice(idx, idx + 1)[0];
    console.log('Picked Card', card);
    this.pickedCards.push(card);
    this.boostersInRound[this.activeBooster] = this.boostersInRound[this.activeBooster].filter(c => c.name !== card.name);
    this.cardsPicked += 1;
    if (this.cardsPicked > 1) {
      this.nextBooster();
    }
  }
}

