const Game = function(){
  this.score = 0;
}

Game.prototype.updateScore = function(){
  return this.score += 10;
}
