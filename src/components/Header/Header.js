import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {HeaderTag} from './HeaderStyle';

const Header = () => {
    return (
        <section id="header" className="home_section">
            <HeaderTag className="relative">
                <div className="overlay"></div>
                <Container>
                    <div className="middle-content z-index">
                        <h1 className="white-color">Hello, I'm Danial</h1>
                        <h3 className="text-danger bold">Front-End Web Developer</h3>
                        <p className="par white-color">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#"><Button variant="danger">Show C.V</Button></a>
                    </div>
                </Container>
            </HeaderTag>
        </section>
    )
}

export default Header;