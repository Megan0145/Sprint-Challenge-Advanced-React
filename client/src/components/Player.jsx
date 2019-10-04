import React from 'react';
import styled from 'styled-components';

const StyledPlayer = styled.div`
    width: 30%;
    text-align: center;
`;

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { playerDetails } = this.props;
        return(
            <StyledPlayer>
                <h2>{playerDetails.name}</h2>
                <p>{playerDetails.country}</p>
                <p>{playerDetails.searches}</p>
            </StyledPlayer>
        );
    }
}