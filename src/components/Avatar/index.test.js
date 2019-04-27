import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './index';

it ('initializes avatar with empty `img` tag', () => {
    const avatar = shallow(<Avatar/>);
    expect(avatar.find('img')).toHaveLength(1);
});

it('should accept avatar image called src as prop', () => {
    const props = {
        src: 'path/to/image'
    }
    const avatar = shallow(<Avatar {...props} />);                  
    const avatarInstance = avatar.instance();

    expect(avatarInstance.props.src).toEqual(props.src);
});

it ('should  view avatar image', () => {
    const props = {
        src: 'path/to/image'
    }
    const avatar = shallow(<Avatar {...props} />);
    
    expect(avatar.find('img').prop('src')).toEqual(props.src);
});