import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { findCharacters } from '../services/RandMApi';

export default class RandMContainer extends Component {
    state = {
        characters: []
    }

    async componentDidMount() {
        const characters = await findCharacters();
        this.setState({ characters })
    }

    render() {
        return <CharacterList characters={this.state.characters} />
    }
}