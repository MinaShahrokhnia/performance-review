import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App/>);

it('renders `app` component', () => {
    expect(app).toMatchSnapshot();
})
