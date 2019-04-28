import React from 'react';
import { shallow } from 'enzyme';
import PersonalInformation from '.'

const informationPersonal = shallow(<PersonalInformation/>);

it('renders `personal-information` component', () => {
    expect(informationPersonal).toMatchSnapshot();
})

it('initialize the `state` with empty reviewer name', () => {
    expect(informationPersonal.state().reviewerName).toEqual('');
});

it('initialize the `state` with empty reviewer name', () => {
    expect(informationPersonal.state().reviewerName).toEqual('');
});

it('initialize the `state` with empty name', () => {
    expect(informationPersonal.state().name).toEqual('');
});

it('initialize the `state` with empty date', () => {
    expect(informationPersonal.state().date).toEqual('');
});

it('should accept `state` with onchange', () => {
    PersonalInformation.find('.reviewer-name').simiulate('change');
    expect(informationPersonal.state().reviewerName).toEqual('mina')
})