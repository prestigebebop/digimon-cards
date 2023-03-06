import React from 'react';
import '../Container/App.css';

//state feeds digimons data as props. Props = digimons
const DigimonCard = ({name, img, level}) => {
    return(
        <div className='tc dib ma3 mw5 bg-gold br3 pa3 grow shadow-5'>
            <img src={img} alt='digimons'></img>
            <div>
                <h2>{name}</h2>
                <p>{level}</p>
            </div>
        </div>
    );
};

export default DigimonCard;