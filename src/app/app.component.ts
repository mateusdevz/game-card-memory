import { Component, OnInit } from '@angular/core';

interface Card {
  id: number;
  text: string;
  selected: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game-card-memory';
  isGridDisabled = false;
  cardsSelected: Card[] = [];

  cards: Card[] = [
    {
      id: 1,
      text: 'Mateus',
      selected: false
    },
    {
      id: 1,
      text: 'Mateus',
      selected: false
    },
    {
      id: 2,
      text: 'Geovanna',
      selected: false
    },
    {
      id: 2,
      text: 'Geovanna',
      selected: false
    },
    {
      id: 3,
      text: 'Karol',
      selected: false
    },
    {
      id: 3,
      text: 'Karol',
      selected: false
    },
    {
      id: 4,
      text: 'Camile',
      selected: false
    },
    {
      id: 4,
      text: 'Camile',
      selected: false
    },
    {
      id: 5,
      text: 'Renata',
      selected: false
    },
    {
      id: 5,
      text: 'Renata',
      selected: false
    },

    {
      id: 6,
      text: 'Mauricio',
      selected: false
    },
    {
      id: 6,
      text: 'Mauricio',
      selected: false
    },

    {
      id: 7,
      text: 'Edileuza',
      selected: false
    },
    {
      id: 7,
      text: 'Edileuza',
      selected: false
    }
  ];

  ngOnInit(): void {
    this.shuffleCards();
  }

  shuffleCards(): void {
    let currentIndex = this.cards.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }

  handleClick(card: any): void {
    if(!this.isGridDisabled && !card.disabled) {
      this.cardsSelected.push(card);
      card.selected = true;
      this.checkIfTwoOpened();

    }
  }

  checkIfTwoOpened(): void {
    const areTwoOpened = this.cards.filter(card => card.selected).length === 2;

    if(areTwoOpened) {
      this.isGridDisabled = true;
      this.setupGrid();
    }
  }

  setupGrid(): void {
    setTimeout(() => {
      this.cards = this.cards.map(card => {
        card.selected = false;
        return card;
      });

      this.verifyIfWin();
      this.isGridDisabled = false;
    }, 1800);
  }

  verifyIfWin(): void {
    if(this.cardsSelected.length > 1) {
      const first = this.cardsSelected[0];
      const second = this.cardsSelected[1];

      const isRight = first.text === second.text;

      if(isRight) {
        this.cards = this.cards.map(card => {
          if(card.id === first.id) {
            card.disabled = true;
          }
          return card;
        })
      }

      this.cardsSelected = [];
    }
  }
}
