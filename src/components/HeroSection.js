import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/jumi.mp4" autoPlay loop muted />
            <h1>BALD GEHT ES LOS!</h1>
            <p>Wir reisen um die Welt</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Zum Blog
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
