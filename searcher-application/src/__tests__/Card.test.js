import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


import Card from '../components/Card';

test('Card renders an img tag with the correct src', () => {
    const component = renderer.create(
        <Card 
            image='http://test.com/test.jpg' 
            name='Card Title'
            description='Card Description'
        />
    );

    const tree = component.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
    expect(tree.props.className).toBe('card');
    // expect(tree.props.img).toBe('http://test.com/test.jpg');
    // expect(tree.props.name).toBe('Card Title');
    // expect(tree.props.description).toBe('Card Description');
    
});
