import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import cross from './cross.png';

const Logo = () => {
    return (
        <div className='ma4 mt4'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
                <div className="Tilt-inner pa3"> <img alt='logo' src={ cross } /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;