const buildBoards = (board) => {
  let domString = '';
  domString += '<div class="card">';
  domString += `<div class="card-header">${board.description}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += '<p class="card-text"></p>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildBoards };
