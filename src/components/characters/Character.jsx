import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ name, image, id }) => (
    <>
    <img src={image} alt={name} />
    <p>{name}</p>
    </>

);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Character;