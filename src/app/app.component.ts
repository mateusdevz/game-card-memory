import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-card-memory';
  disabled = false;

  cards = [
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
    },

    {
      id: 8,
      text: 'Daniel',
      selected: false
    },
    {
      id: 8,
      text: 'Daniel',
      selected: false
    },

    {
      id: 9,
      text: 'Neusa',
      selected: false
    },
    {
      id: 9,
      text: 'Neusa',
      selected: false
    },
    {
      id: 10,
      text: 'Jair',
      selected: false
    },
    {
      id: 10,
      text: 'Jair',
      selected: false
    },
  ];

  handleClick(card: any): void {
    if(!this.disabled) {
      card.selected = true;
      this.checkIfTwoOpened();
    }
  }

  checkIfTwoOpened(): void {
    const areTwoOpened = this.cards.filter(card => card.selected).length === 2;

    if(areTwoOpened) {
      this.disabled = true;
      this.setupGrid();
    }
  }

  setupGrid(): void {
    setTimeout(() => {
      this.cards = this.cards.map(card => {
        card.selected = false;
        return card;
      });

      this.disabled = false;
    }, 1800);
  }
}
