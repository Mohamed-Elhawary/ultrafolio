import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios';

class Profile extends Component {
    state = {
        profile: []
    }

    componentDidMount() {
        axios.get('data.json').then(response => {this.setState({profile: response.data.profile})});
    }

    render() {
        const {profile} = this.state;
        const profileBars = profile.map(bar => {
            return(
                <div key={bar.id} className="mb-4">
                    <h5 className="text-left">{bar.title}</h5>
                    <ProgressBar now={bar.percent} label={`${bar.percent}%`} variant="danger"/>
                </div>
            )
        });

        return (
            <section id="profile" className="section-padd home_section">
                <h2 className="mb-5">My Profile</h2>
                <Container>
                    <Row>
                        <Col md={6} className="mb-4">
                            <h4 className="text-left text-danger">Name: <span className="dark-grey h5">Danial Peter</span></h4>
                            <h4 className="text-left text-danger">Birthday: <span className="dark-grey h5">11/5/1995</span></h4>
                            <h4 className="text-left text-danger">Address: <span className="dark-grey h5">Ain Shams, Ramy St.</span></h4>
                            <h4 className="text-left text-danger">Phone: <span className="dark-grey h5">+022 3648456</span></h4>
                            <h4 className="text-left text-danger">Email: <span className="dark-grey h5">danial.14@gmail.com</span></h4>
                            <h4 className="text-left text-danger">Website: <span className="dark-grey h5">www.danial.com</span></h4>
                        </Col>
                        <Col md={6}>
                            {profileBars}
                        </Col>
                    </Row>
                </Container>
                
            </section>
        )
    }
}

export default Profile;