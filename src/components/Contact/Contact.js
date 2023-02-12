import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <div>
            <div className="head high-height relative" style={{background: "url('images/Contact/contact-bg.jpg') no-repeat", backgroundSize: "cover", backgroundPosition: "40%"}}>
                <div className="overlay">
                    <div className="middle-content">
                        <h1 className="text-danger bold mb-4">Contact Me</h1>
                        <p className="par white-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi sapiente accusamus repudiandae, nihil est quidem laudantium nulla fuga.</p>
                    </div>
                </div>
            </div>
            <Form className="section-padd">
                <Container>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" className="mb-4"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" className="mb-4"/>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail" className="text-left mb-4">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <textarea placeholder="Your Message" style={{resize: "none", width: "100%", height: "200px"}} className="p-2"></textarea>
                    </Form.Group>
                    <Button variant="danger" type="submit" className="btn-lg" style={{float: "left"}}>Submit</Button>
                </Container>
            </Form>
        </div>
    )
}

export default Contact;