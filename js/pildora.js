function Pildora(game, player) {
  this.game = game;
  this.player = player;
  this.ctx = this.game.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 900);
  this.y = -50;
  this.vy = 1;
  this.width = 20;
  this.height = 108;
  this.fps = 60;
  this.isOnBonus = false;

  this.img = new Image();
  this.img.src = 'img/BONUS/pastillaAnti.png';

}

Pildora.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 35, 35);
  
};


Pildora.prototype.move = function () {
  this.y += this.vy;
};

Pildora.prototype.colision = function () {
  return this.game.pildoras.forEach(function (pildora, i) {
    if (
      pildora.x + pildora.width >= this.player.x && this.player.x + this.player.width >= pildora.x &&
      (pildora.y-80) + pildora.height >= this.player.y && this.player.y + this.player.height >= pildora.y
    ){
      this.isOnBonus = true;
      var audio3 = new Audio("sounds/orgasmo.mp3");
      audio3.play();
      setTimeout(function(){
        this.isOnBonus = false
      }.bind(this),4000)
      this.game.pildoras.splice(i,1)
    }
  }.bind(this))
}