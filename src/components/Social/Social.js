import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {SocialBox} from './SocialStyle';

class Social extends Component {
    state = {
        social: []
    }

    componentDidMount() {
        axios.get('data.json').then(response => {this.setState({social: response.data.social})});
    }

    render() {
        const {social} = this.state;
        const socialBoxes = social.map(socialBox => {
            let socialIcon;
            if(socialBox.icon == "facebook") {
                socialIcon = <FontAwesomeIcon icon={faFacebook} className="fa-2x white-color" style={{float: "left"}}/>;
            } else if(socialBox.icon == "twitter") {
                socialIcon = <FontAwesomeIcon icon={faTwitter} className="fa-2x white-color" style={{float: "left"}}/>;
            } else {
                socialIcon = <FontAwesomeIcon icon={faYoutube} className="fa-2x white-color" style={{float: "left"}}/>;
            }
            return(
                <Col lg="4" key={socialBox.id}>
                    <a href={socialBox.link}>
                        <SocialBox  num={socialBox.id} className="p-4 relative cursor">
                            <div className="middle-content">
                                {socialIcon}
                                <h4 className="white-color">{socialBox.title}</h4>
                            </div>
                        </SocialBox>
                    </a>
                </Col>
            )
        });
        return (
            <section id="social" className="home_section">
                <Container fluid style={{paddingRight: 0, paddingLeft: 0}}>
                    <Row>
                        {socialBoxes}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Social;