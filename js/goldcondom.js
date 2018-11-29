function GoldCondom(game, player) {
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
  this.img.src = 'img/goldcondom.jpg';

}

GoldCondom.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 55, 55);
  
};

GoldCondom.prototype.move = function () {
  this.y += this.vy;
};

GoldCondom.prototype.colision = function () {
  return this.game.goldcondoms.forEach(function (goldcondom, i) {
    if (
      goldcondom.x + goldcondom.width >= this.player.x && this.player.x + this.player.width >= goldcondom.x &&
      (goldcondom.y-80) + goldcondom.height >= this.player.y && this.player.y + this.player.height >= goldcondom.y
    ){
      var audio3 = new Audio("sounds/CaballoHORSEjiaa.mp3");
      audio3.play();
      this.game.spermCounter+=500;
      this.game.goldcondoms.splice(i,1)
      
    }
  }.bind(this))
}




