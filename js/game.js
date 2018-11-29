

function Game(game) {
  this.canvas = document.getElementById(game);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
}

Game.prototype.reset = function() {


  this.counter = 0;
  this.frameCounter = 0;
  this.player = new Player(this)
  this.obstacle = new Obstacle(this,this.player, this.spermVy)
  this.pildora = new Pildora(this,this.player)
  this.condom = new Condom(this,this.player)
  this.goldcondom = new GoldCondom(this,this.player)
  this.background = new Background(this)
  this.score = new Score(this);
  this.gameover = new GameOver(this);
  this.ciguena = new Ciguena(this);

  this.obstacles =[];
  this.pildoras = [];
  this.condoms = [];
  this.goldcondoms = [];

  this.spermCounter = 0;
  this.pillCounter = 0;
  this.condomCounter = 0;
  this.goldcondomCounter = 0;
  this.spermVy = 2;
}

Game.prototype.start = function () {
  this.reset();

  this.interval = setInterval(function () {
    this.counter++;
    this.frameCounter++;
    if(this.counter % 30 == 0){
      this.obstacles.push(new Obstacle(this, this.player, this.spermVy))
      if (this.spermCounter % 25 === 0 && this.spermCounter != 0){
        this.spermVy +=1; 
        
      }
    if(this.counter %90 == 0){
      this.pildoras.push(new Pildora(this,this.player, this.vy))
    }

    if(this.counter %70 == 0){
      this.condoms.push(new Condom(this,this.player, this.vy))
    }

    if(this.counter %200 == 0){
      this.goldcondoms.push(new GoldCondom(this,this.player, this.vy))
    }

    }

    this.pildora.colision();
    this.condom.colision();
    this.goldcondom.colision();
    this.clear();
    this.player.setListeners()
    this.draw();
    this.moveAll();
    this.player.animateImg()

    if(this.obstacle.colision() && !this.pildora.isOnBonus){
      var audio3 = new Audio("sounds/gameover1.wav");
  audio3.play();
      this.gameOver(); 
     
    };
  }.bind(this), 1000 / this.fps);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {

  this.background.draw();
  this.score.drawImage();
  this.drawScore();
  this.player.draw();
 

  // Aquí cambio de color según el Bonus:
  this.pildora.isOnBonus ? this.player.drawBonusPill() : '';


  this.pildoras.forEach(function(pildora){
    if(pildora.y > this.canvas.height){
      this.pillCounter++;
      this.pildoras.shift();
    }
    
    pildora.draw();
  }.bind(this))


  this.condoms.forEach(function(condom){
    if(condom.y > this.canvas.height){
      this.condomCounter++;
      this.condoms.shift();
    }
    
    condom.draw();
  }.bind(this))

  this.goldcondoms.forEach(function(goldcondom){
    if(goldcondom.y > this.canvas.height){
      this.goldcondomCounter++;
      this.goldcondoms.shift();
    }
    
    goldcondom.draw();
  }.bind(this))


  this.obstacles.forEach(function(obstacle){
    if(obstacle.y > this.canvas.height){
      this.spermCounter++;
      this.obstacles.shift();
    }

    obstacle.draw();
  }.bind(this))

  this.drawScore();
}

Game.prototype.moveAll = function () {
  this.player.setListeners();
  this.obstacle.move();

  this.pildoras.forEach(function(pildora){
    pildora.move();
  }.bind(this))

  this.condoms.forEach(function(condom){
    condom.move();
  }.bind(this))

  this.goldcondoms.forEach(function(goldcondom){
    goldcondom.move();
  }.bind(this))

  this.obstacles.forEach(function(obstacle){
    obstacle.move();
  }.bind(this))
}


Game.prototype.drawScore = function() {
  this.ctx.font = "50px sans-serif";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(Math.floor(this.spermCounter), 100, 75);
}

Game.prototype.gameOver = function() {

  clearInterval(this.interval);
  
  document.getElementById('stork').classList.remove('storkOff')  

  var myAudio = document.createElement("audio");

  this.intervalgameOver = setInterval(function () {
    this.gameover.draw();
    this.gameover.move();
  }.bind(this), 1000 / this.fps);
  
  
  setTimeout(function(){
    document.getElementById('stork').classList.add('storkOff')  
    clearInterval(this.intervalgameOver)
    this.start();


  }.bind(this),5000)
  

};
