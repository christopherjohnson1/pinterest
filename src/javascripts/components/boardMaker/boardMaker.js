const buildBoards = (board) => {
  let domString = '';
  domString += '<div class="card">';
  domString += `<div class="card-header"><h5>${board.name}</h5></div>`;
  domString += '<div class="card-body">';
  domString += `<p class="card-title">${board.description}</p>`;
  domString += '<button class+"single-view btn btn-outline-info"><i class="fas fa-expand-arrows-alt"></i> Show me the pins</button>';
  domString += '<p class="card-text"></p>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildBoards };
