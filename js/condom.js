function Condom(game, player) {
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
  this.img.src = 'img/BONUS/condom.png';

}

Condom.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 45, 45);
  
};

Condom.prototype.move = function () {
  this.y += this.vy;
};


Condom.prototype.colision = function () {
  return this.game.condoms.forEach(function (condom, i) {
    if (
      condom.x + condom.width >= this.player.x && this.player.x + this.player.width >= condom.x &&
      (condom.y-80) + condom.height >= this.player.y && this.player.y + this.player.height >= condom.y
    ){
      var audio = new Audio("sounds/Papi.mp4");
  audio.play();
      this.game.spermCounter+=100;
      this.game.condoms.splice(i,1)
      
    }
  }.bind(this))
}