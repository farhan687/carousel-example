import * as utils from '../utils';
import data from './__fixtures__/items.json';

describe('utils', () => {
  it('groupDataInBatch', () => {
    expect(utils.groupDataInBatch(data, 2)).toMatchSnapshot();
  });

  it('getNextIndex', () => {
    expect(utils.getNextIndex(0, 3)).toBe(1);
    expect(utils.getNextIndex(2, 3)).toBe(0);
    expect(utils.getNextIndex(4, 3)).toBe(0);
  });

  it('getPrevIndex', () => {
    expect(utils.getPrevIndex(0, 3)).toBe(2);
    expect(utils.getPrevIndex(2, 3)).toBe(1);
    expect(utils.getPrevIndex(-1, 3)).toBe(2);
  });
});
