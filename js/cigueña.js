function Ciguena(game) {

  this.game= game;
  this.ctx = this.game.canvas.getContext("2d");
  this.fps = 60;
  this.img = new Image();
  this.img.src = 'img/cigueña.gif';
  this.x =0;
  this.y=0;
 
}

Ciguena.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  
};

