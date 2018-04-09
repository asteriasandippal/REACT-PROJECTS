import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchResults from '../../../containers/Searcher/SearchResults';
import GridBlock from '../../../components/GridBlock';
import Card from '../../../components/Card';

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../../helps/mocks';

test('SearchResults render correctly', () => {
    const component = shallow(
        <SearchResults showPhotos={
            JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos}
        />);
    const tree = component.getElement();

    expect(tree).toMatchSnapshot();

});