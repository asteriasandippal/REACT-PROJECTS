import React from 'react';
import renderer from 'react-test-renderer';

import SearchResults from '../../../containers/Searcher/SearchResults';
import GridBlock from '../../../components/GridBlock';
import Card from '../../../components/Card';

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../../helps/mocks';
const data = [];

test('SearchResults render correctly', () => {
    const component = renderer.create(
        <SearchResults showPhotos={
            JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos}
        />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();

});