import React from 'react';
import { shallow } from 'enzyme';

import { HeaderMenu } from './HeaderMenu/index';

describe('HeaderMenu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderMenu />);

    expect(wrapper.find('.headerMenu').length).toEqual(1);
  });

  it('matches its snapshot when a currentUser is set', () => {
    const user = { email: 'john@example.com' };
    const wrapper = shallow(<HeaderMenu currentUser={user} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('matches its snapshot when no currentUser is set', () => {
    const wrapper = shallow(<HeaderMenu />);

    expect(wrapper).toMatchSnapshot();
  });
});
