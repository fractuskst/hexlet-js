import _ from 'lodash';

const lastNumber = (one, two) => {
  const last = _.last([one, two]);
  return last;
};

export default lastNumber;
