import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../components/Carousel';
import data from '../__fixtures__/items.json';

describe('Carousel', () => {
  let props;

  beforeEach(() => {
    props = {
      items: data,
      size: 2
    };
  });

  it('renders without crashing', () => {
    const component = shallow(
      <Carousel {...props}>
        {({ item }) => (
          <p>{item.title}</p>
        )}
      </Carousel>,
    );
    expect(component).toMatchSnapshot();
  });
});
