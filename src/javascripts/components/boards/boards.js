import utils from '../../helpers/utils';

const boardsHeader = () => {
  const domString = '<h1 class="text-center mt-3">Boards</h1>';
  utils.printToDom('pinterest-boards', domString);
};

export default { boardsHeader };
