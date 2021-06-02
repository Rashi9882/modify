import React from 'react';
import {Col,Container,Row,Form,Button} from 'reactstrap';

export class LoginCard extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                    <Form>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>   
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginCard;