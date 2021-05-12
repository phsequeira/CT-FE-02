import React, { Component } from 'react';
import CharacterDetails from '../components/details/CharacterDetails';
import { findCharacterById } from '../services/RandMApi';

export default class RandMDetailContainer extends Component {
    state = {
        character: {}
    }

    async componentDidMount() {
        const character = await findCharacterById(this.props.match.params.id);
        this.setState({ character })
    }

    render() {
        return <CharacterDetails character={this.state.character} />
    }
}