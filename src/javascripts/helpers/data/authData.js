import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../../components/home/home';
import boards from '../../components/boards/boards';
import singleView from '../../components/singleView/singleView';

const authDiv = $('#auth');
const pinterestDiv = $('#pinterest');
const logoutButton = $('#navbar-logout-button');
const pinterestHeading = $('#show-me-the-pinterest');
const boardsHeading = $('#pinterest-boards-heading');
const singleBoard = $('#single-board');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pinterestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinterestHeading.addClass('hide');
      boardsHeading.removeClass('hide');
      singleBoard.removeClass('hide');
      boards.buildBoards();
      boards.boardsHeader();
      singleView.singleBoardView();
    } else {
      authDiv.removeClass('hide');
      pinterestDiv.addClass('hide');
      logoutButton.addClass('hide');
      pinterestHeading.removeClass('hide');
      boardsHeading.addClass('hide');
      singleBoard.addClass('hide');
      home.pinterestHeader();
    }
  });
};

export default { checkLoginStatus };
