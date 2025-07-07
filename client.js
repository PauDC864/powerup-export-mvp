var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

// Inicializa la librería de Trello Power-Up
TrelloPowerUp.initialize({
  // Start adding handlers for your capabilities here!
  'board-buttons': function(t, options){
    return [{
      // we can either provide a button that has a callback function
      // that callback function should probably open a popup, overlay, or boardBar
      icon: BLACK_ROCKET_ICON,
      text: 'Popup',
      callback: boardButtonCallback
    }];
}});

var boardButtonCallback = function(t) {
  return t.board('id').then(function(board) {
    console.log('Datos del tablero:', board);

    //const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(board, null, 2));
    //const downloadAnchorNode = document.createElement('a');
    //downloadAnchorNode.setAttribute("href", dataStr);
    //downloadAnchorNode.setAttribute("download", `${board.name || 'tablero'}.json`);
    //document.body.appendChild(downloadAnchorNode);
    //downloadAnchorNode.click();
    //downloadAnchorNode.remove();
  });
}
