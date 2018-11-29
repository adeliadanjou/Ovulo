
function Obstacle(game, player, vy) {
  this.game = game;
  this.player = player;
  this.ctx = this.game.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 900);
  this.y = -50;
  this.vy = vy;
  this.width = 15;
  this.height = 90;
  this.fps = 60;


  this.img = new Image();
  this.img.src = 'img/whiteWithShadowSpermaSonrisa.png';

  this.img.frames = 8;
  this.img.frameIndex = 0;
}

Obstacle.prototype.draw = function () {

  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.width,
    this.height
  );

  this.animateImg();
};

Obstacle.prototype.animateImg = function () {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  if (this.game.frameCounter % 20 === 0) {
    this.img.frameIndex += 1;

    // Si el frame INDEX es el último, se vuelve al primero
    if (this.img.frameIndex > 7) this.img.frameIndex = 0;
  }
};

Obstacle.prototype.move = function () {
  this.y += this.vy;
};

Obstacle.prototype.colision = function () {
  
  return this.game.obstacles.some(function (obstacle) {
    return (
      obstacle.x + obstacle.width >= (this.player.x+8) && this.player.x + this.player.width >= obstacle.x+10 &&
      obstacle.y + obstacle.height >= (this.player.y+8) && this.player.y + this.player.height >= obstacle.y+5
    ) 

  }.bind(this))
}