import utils from '../../helpers/utils';

const pinterestHeader = () => {
  const domString = '<h1 class="text-center mt-3">Pinterest</h1>';
  utils.printToDom('show-me-the-pinterest', domString);
};

export default { pinterestHeader };
