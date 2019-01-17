function GameOver(game) {

  this.game= game;
  this.ctx = this.game.canvas.getContext("2d");
  this.fps = 60;
  this.img = new Image();
  this.img.src = 'img/mountainnight.jpg';
  this.x =0;
  this.y=0;

  this.dx = 3;
}

GameOver.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
 
  this.game.ctx.drawImage(this.img, this.x - this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
};

GameOver.prototype.move = function() {
  this.x += this.dx;
  
 
  if (this.x < -this.game.canvas.width) this.x = 0;
};
