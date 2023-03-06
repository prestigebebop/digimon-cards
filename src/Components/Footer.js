import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faYoutube, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import '../Container/App.css';

const Footer = () => {
    return (
        <div className='pa3'>
            <footer className='pa3 icon'>
                 <h3>Created by @ther3alenso</h3>
                 <FontAwesomeIcon icon={faCoffee} className='pa2 grow hover-dark-green pointer h2 w2 link'></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faYoutube} className='pa2 grow hover-red pointer h2 w2 link'></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faTwitter} className='pa2 grow hover-blue pointer h2 w2 link'></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faGithub} className='pa2 grow hover-light-silver pointer h2 w2 link'></FontAwesomeIcon>
            </footer>
           
        </div>
    );
};

export default Footer;