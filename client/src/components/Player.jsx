import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { playerDetails } = this.props;
        return(
            <div>
                <h2>{playerDetails.name}</h2>
                <p>{playerDetails.country}</p>
                <p>{playerDetails.searches}</p>
            </div>
        );
    }
}