// Inicializa la librería de Trello Power-Up
TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: './icon.png', // Opcional
      text: 'Exportar tablero',
      callback: exportBoard
    }];
  }
});

function exportBoard(t) {
  return t.board('all').then(function(board) {
    console.log('Datos del tablero:', board);

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(board, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${board.name || 'tablero'}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}
