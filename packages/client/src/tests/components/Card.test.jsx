import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';
import data from '../__fixtures__/items.json';

describe('Card', () => {
  let props;

  beforeEach(() => {
    props = {
      ...data[0],
    };
  });

  it('renders without crashing', () => {
    const component = shallow(
      <Card {...props}>
        {({ item }) => (
          <p>{item.title}</p>
        )}
      </Card>,
    );
    expect(component).toMatchSnapshot();
  });
});
