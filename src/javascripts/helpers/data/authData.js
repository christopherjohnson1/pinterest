import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../../components/home/home';

const authDiv = $('#auth');
const pinterestDiv = $('#pinterest');
const logoutButton = $('#navbar-logout-button');
const pinterestHeading = $('#show-me-the-pinterest');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pinterestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinterestHeading.addClass('hide');
    } else {
      authDiv.removeClass('hide');
      pinterestDiv.addClass('hide');
      logoutButton.addClass('hide');
      pinterestHeading.removeClass('hide');
      home.pinterestHeader();
    }
  });
};

export default { checkLoginStatus };
