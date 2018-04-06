import React from 'react';
import GridBlock from '../../components/GridBlock';
import Card from '../../components/Card';

class SearchResults extends React.Component {
    render() {
        const { showPhotos } = this.props;
        return (
            <div className="row">
                {showPhotos.map(photo =>
                    <GridBlock colume="4" key={photo.id}> 
                        <Card 
                            image={photo.image_url[0]} 
                            name={photo.name}
                            description={photo.description}
                        />
                    </GridBlock>
                )}
            </div>
        );
    }
}

export default SearchResults;
