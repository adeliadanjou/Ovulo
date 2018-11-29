// var KEY_UP = 38;
// var KEY_RIGHT = 39;
// var KEY_DOWN = 40;
// var KEY_LEFT = 37;

function Player(game) {

  this.game = game;
  this.ctx = this.game.canvas.getContext("2d");
  this.x= -50;
  this.y= -50;
  this.vx= 10;
  this.vy=10;
  this.width = 75;
  this.height = 74;
  this.radius = 50;
 

  this.setListeners();
  this.fps = 60;

  this.img = new Image();
  this.img.src = 'img/ovulo.png';
  
  // número de imágenes diferentes
  this.img.frames = 4;
  this.img.frameIndex = 0;
  
  }

  Player.prototype.drawBonusPill = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(63,191,191,0.8)";
    this.ctx.arc(this.x+38, this.y+38, this.radius, 0, 2*Math.PI );
    this.ctx.fill();
    this.ctx.closePath();
  };


  Player.prototype.draw = function(){

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


  Player.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.frameCounter % 20 === 0) {
      this.img.frameIndex += 1;
      
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 3) this.img.frameIndex = 0;
    }
  };
  
  Player.prototype.setListeners = function() {
  this.game.canvas.addEventListener('mousemove', function(evt) {
    this.x = evt.clientX - 250
    this.y = evt.clientY - 155   

  }.bind(this), false);
}
  
  