require('isomorphic-fetch');

import React from 'react';
import { shallow } from 'enzyme';

import Search from '../../../containers/Searcher/Search';
import SearchForm from '../../../containers/Searcher/SearchForm';
import SearchResults from '../../../containers/Searcher/SearchResults';

test('Search render correctly', () => {
    const wrapper = shallow(
        <Search/>
    );

    const tree = wrapper.getElement();
    expect(tree).toMatchSnapshot();
});

test('Search Searches correctly', () => {
    const wrapper = shallow(
        <Search/>
    );

    const searchForm = wrapper.find(SearchForm);
    searchForm.prop('onSearch')('test');

    const tree = wrapper.getElement();
    expect(tree).toMatchSnapshot(); 
});

