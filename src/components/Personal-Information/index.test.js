import React from 'react';
import { shallow } from 'enzyme';
import PersonalInformation from '.'

const informationPersonal = shallow(<PersonalInformation/>);

it('renders `personal-information` component', () => {
    expect(informationPersonal).toMatchSnapshot();
})