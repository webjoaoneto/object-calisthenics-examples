class Player {
  private score: number = 0;


  getScore() {
    return this.score;
  }

  setScore(score: number) {
    this.score = score;
  }
}

class Game {
  constructor(public player1: Player, public player2: Player) {
    
  }


}

const game = new Game(new Player(), new Player());
game.player1.setScore(game.player1.getScore() + 1);
game.player1.setScore(game.player1.getScore() + 1);
game.player2.setScore(game.player1.getScore() + 1);
  