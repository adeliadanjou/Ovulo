window.onload = function() {

  document.getElementById('start').onclick = function() {
    document.getElementById('start').classList = 'hide';
    var game = new Game("game");
    game.start();
  }
};
