import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AboutSection} from './AboutStyle';

const About = () => {
    return (
        <AboutSection id="about" className="section-padd relative home_section">
            <div className="overlay">
                <Container>
                    <Row>
                        <Col lg={{span: 6, offset: 6}} className="relative">
                            <div style={{marginTop: "25%"}}>
                                <h2 className="white-color text-left">This is <span className="h1 bold">Me</span><br/><span className="h1 bold text-danger">Creative Developer</span></h2>
                                <p className="par white-color text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi sapiente accusamus repudiandae, nihil est quidem laudantium nulla fuga recusandae et eveniet deleniti ipsa. Maiores aperiam expedita labore nesciunt sint.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </AboutSection>
    )
}

export default About;