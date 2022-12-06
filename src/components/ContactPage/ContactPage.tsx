import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default class ContactPage extends React.Component{
    render() {
        return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faPhone}/> Contact Details</Card.Title>
                    <Card.Text>Contact Number and Email</Card.Text>
                </Card.Body>
            </Card>
        </Container>
        );
    }
}