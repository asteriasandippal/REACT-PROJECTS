import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {stub} from 'sinon';

import SearForm from '../../../containers/Searcher/SearchForm';

test('Search Form render correctly', () => {
    const wrapper = renderer.create(<SearForm onSearch={() => {}}/>);
    const tree  = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
});

test('SearchForm calls onSearch with the contents of the input when the form is submitted', () => {
    
    const onSearchStub = stub();
    const wrapper = mount(
        <SearForm onSearch={onSearchStub}/>
    );

    wrapper.find('input').simulate('change', {target: {value: 'Test'}});
    wrapper.find('button').simulate('submit');

    expect(onSearchStub.callCount).toBe(1);
    expect(onSearchStub.calledWith('Test')).toBe(true);
});