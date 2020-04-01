import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const singleBoardView = (e) => {
  const boardId = e.target.closest('.card').id;
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
        console.error('url', pin.imageUrl);
      });
      utils.printToDom('single-board', domString);
    })
    .catch((err) => console.error('single view broke', err));
};

export default { singleBoardView };
