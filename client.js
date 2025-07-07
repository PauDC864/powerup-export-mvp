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
  },
  'card-badges': function(t, options) {
    // No quieres usar badges → devuelve []
    return [];
  }
});

var boardButtonCallback = function(t) {
  return t.lists('all').then(function(lists) {

    // Creamos estructura
    const exportData = {
      lists: lists.map(function(lista) {
        return {
          id: lista.id,
          name: lista.name,
          cards: lista.cards.map(function(card) {
            return {
              id: card.id,
              name: card.name,
              desc: card.desc,
              due: card.due,
              url: card.url,
              labels: card.labels
            };
          })
        };
      })
    };

    console.log("Export JSON:", exportData);

    // Lo convertimos a JSON y lo descargamos
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "listas_y_tarjetas.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}
