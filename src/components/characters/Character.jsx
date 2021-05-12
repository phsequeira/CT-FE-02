import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom' 

const Character = ({ name, image, id }) => (
    <>
    <img src={image} alt={name} />
    <Link to={`/${id}`}><p>{name}</p></Link>
    </>

);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Character;