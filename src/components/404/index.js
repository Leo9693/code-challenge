import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
function index() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title className="text-danger">
                        <strong>404! </strong>Page doesn't exist
                    </Card.Title>
                    <Link to={"/"}>
                        <Button>Go back to home page</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default index;
