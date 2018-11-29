function Score (game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = 'img/counter.png';
  this.spermCounter = 0;
}

Score.prototype.drawImage = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 220, 100);

}

