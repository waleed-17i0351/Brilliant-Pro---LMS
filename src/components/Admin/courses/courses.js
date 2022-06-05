import React from 'react';
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

export default class Courses extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Course A</Card.Title>
                    <Card.Text>
                        Course Description
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}