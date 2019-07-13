import React, { Component } from 'react';
import './style.css';
import PopularPlace from './components/PopularPlace/Index';

class BTGallery extends Component {

    printClassCol = (colSize) => {
        return "col-md-" + colSize + " col-xs-" + colSize*2;
    }

    allPlaces = (places) => {
        var result = null;

        result = places.map( (place, key) => {
            var sizeCol = 4;
            if ( key === 1 || key === 2 ) {
                sizeCol = 2;
            }
            
            return (
                <div className={this.printClassCol(sizeCol)} key={key} >
                    <PopularPlace place={place} />
                </div>
            );
        } );

        return result;
    }

    render() {

        return (
            <div className="row bt-gallery">
                {this.allPlaces(this.props.images)}
            </div>
        );

    }
}

export default BTGallery;