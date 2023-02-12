import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {WorkBox} from './WorkStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons';

class Work extends Component {
    state = {
        work: []
    }

    componentDidMount() {
        axios.get('data.json').then(response => {this.setState({work: response.data.work})});
    }

    render() {
        const {work} = this.state;
        const workBoxes = work.map(workBox => {
            let fontAwesomeIcon;
            if(workBox.icon == "faPencilRuler") {
                fontAwesomeIcon = <FontAwesomeIcon icon={faPencilRuler} className="fa-3x text-danger mb-4"/>
            } else if(workBox.icon == "faLaptop") {
                fontAwesomeIcon = <FontAwesomeIcon icon={faLaptop} className="fa-3x text-danger mb-4"/>
            } else {
                fontAwesomeIcon = <FontAwesomeIcon icon={faMobile} className="fa-3x text-danger mb-4"/>
            }
            return(
                <Col lg="4" key={workBox.id}>
                    <WorkBox border="danger" className="p-3 shadow radius" num={workBox.id}>
                        {fontAwesomeIcon}
                        <h3>{workBox.title}</h3>
                        <hr/>
                        <p className="par">{workBox.body}</p>
                    </WorkBox>
                </Col>
            )
        });

        return (
            <section id="work" className="section-padd home_section">
                <h2 className="mb-5">My Work</h2>
                <Container>
                    <Row>
                        {workBoxes}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Work;