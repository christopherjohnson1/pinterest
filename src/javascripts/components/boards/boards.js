import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';

const boardsHeader = () => {
  const domString = '<h1 class="text-center mt-3">Boards</h1>';
  utils.printToDom('pinterest-boards-heading', domString);
};

const buildBoards = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoards(myUid)
    .then((boards) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardMaker.buildBoards(board);
      });
      domString += '</div>';
      utils.printToDom('pinterest', domString);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { boardsHeader, buildBoards };
